import api from './uitls/app.http';


export const uploadImage = async (obj) => {
    return await api.post(`account/uploadImage`, obj);
}