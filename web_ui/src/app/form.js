import React, { useState } from 'react';
import { MESSAGESERR } from './constants/common';
import { Info, InfoInvalid } from './formModel';
import { toast } from 'react-toastify';
import * as api from './formService';

const Form = (props) => {

    const [fields, setFields] = useState({ ...Info });
    const [errors, setErrors] = useState({ ...InfoInvalid });
    const [images, setImages] = useState([]);

    const handleChange = (e, field) => {
        let fieldsT = { ...fields };
        fieldsT[field] = e.target.value;
        handleValidation(field, fieldsT);
        setFields(fieldsT);
    }
    const handleValidation = (field, fieldsT) => {
        let errorsT = { ...errors };
        if (field)
            errorsT[field] = '';
        validateReqire(field, fieldsT, errorsT, Object.keys({ ...InfoInvalid }));
        if (field === 'email' && fieldsT['email']) {
            const pattern = /[a-zA-Z0-9]+[/\.]?([a-zA-Z0-9]+)?[/\@][a-z]{3,9}[/\.][a-z]{3,5}/g;
            const result = pattern.test(fieldsT['email']);
            if (!result) {
                errorsT['email'] = MESSAGESERR.emailInvalid;
            }
        }
        setErrors(errorsT);
        return Object.values(errorsT).every(x => !x);
    }

    const validateReqire = (field, fieldsT, errorsT, fiels = []) => {
        fiels.forEach(item => {
            if (field === item || !field) {
                if (!fieldsT[item] || (Array.isArray(fieldsT[item]) && !fieldsT[item][0]))
                    errorsT[item] = true;
            }
        });
    }
    const isDisabledSave = () => {
        return Object.values(fields).some(x => !x) || Object.values(errors).some(x => !!x);
    }

    const addImage = (e) => {
        e.preventDefault();
        const input = document.getElementById("fileInputImage");
        input.click()
    }
    const handleChangeImage = (e) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        api.uploadImage(formData)
            .then(res => {
                if (res.data.logo_path) {
                    setImages([...images, res.data.logo_path]);
                    toast.success('upload is successfull');
                } else
                    toast.warning(res.data.message);
            }).catch((error) => {
                toast.warning("upload is unsuccessfull");
            });
    }
    const save = async () => {
        await api.save({ ...fields, images }).then(res => {
            if (res.status === 200) {
                toast.success('save is successfull');
            } else
                toast.warning(res.data.message);
        }).catch((error) => {
            toast.warning("save is unsuccessfull");
        });
    }
    return (
        <>
            <div className="container form_main">
                <h6 className="title mb-5">Information</h6>

                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <input type="text" className={`form-control form-control-lg ${!!errors.firstName && 'is-invalid'}`} placeholder="Fisrt Name"
                            value={fields.firstName} onChange={(e) => handleChange(e, 'firstName')} />
                    </div>
                    <div className="col-lg-6 mb-5">
                        <input type="text" className={`form-control form-control-lg ${!!errors.lastName && 'is-invalid'}`} placeholder="Last Name"
                            value={fields.lastName} onChange={(e) => handleChange(e, 'lastName')} />
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <textarea className={`form-control form-control-lg ${!!errors.description && 'is-invalid'}`} rows="3" placeholder="Description"
                            value={fields.description} onChange={(e) => handleChange(e, 'description')}></textarea>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <input type="text" className={`form-control form-control-lg ${!!errors.email && 'is-invalid'}`} placeholder="Email Address"
                            value={fields.email} onChange={(e) => handleChange(e, 'email')} />
                        <div className="invalid-feedback pt-3">{errors.email}</div>
                    </div>
                </div>
                <div className="image_main">
                    <div className="row mb-5">
                        {
                            images.map(e =>
                                <div className="col-lg-6 mb-3">
                                    <img key={e} src={e} className="img-fluid" alt="..." />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-12 mb-3 d-flex justify-content-end mb-3">
                    <input type="file" hidden id="fileInputImage" onChange={handleChangeImage} accept="image/*" />
                    <button type="button" className="btn btn-light" onClick={addImage}><i className="fas fa-plus"></i> Add image</button>
                    <button type="button" className="btn btn-primary" disabled={isDisabledSave()} onClick={save}>Save</button>
                </div>
            </div>
        </>
    );
};

export default Form;