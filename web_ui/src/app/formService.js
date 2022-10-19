import api from './uitls/app.http';
import jsonObj from './uitls/baseUrl.json';

export const uploadImage = async (obj) => {
    return await api.post(`account/uploadImage`, obj);
}

export const viewImage = (file) => {
    return `${jsonObj.isProSite ? jsonObj.basedUrlPro : jsonObj.basedUrl}account/getImage/${file}`;
}

export const save = async (obj) => {
    return await api.post(`account/save`, obj);
}