
const Form = (props) => {
    return (
        <>
            <div className="container form_main">
                <h6 className="title mb-5">Information</h6>

                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <input type="text" className="form-control form-control-lg" placeholder="Fisrt Name" />
                    </div>
                    <div className="col-lg-6 mb-5">
                        <input type="text" className="form-control form-control-lg" placeholder="Last Name" />
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <textarea class="form-control form-control-lg" rows="3" placeholder="Description"></textarea>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <input type="text" className="form-control form-control-lg" placeholder="Email Address" />
                    </div>
                </div>
                <div className="image_main">
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <img src="https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws=" class="img-fluid" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mb-3 d-flex justify-content-end mb-3">
                    <button type="button" class="btn btn-light"><i class="fas fa-plus"></i> Add image</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </>
    );
};

export default Form;