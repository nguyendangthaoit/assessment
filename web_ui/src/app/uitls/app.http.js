import axios from 'axios';
import jsonObj from './baseUrl.json';
// Create axios client, pre-configured with baseURL

let HTTP = axios.create({
    baseURL: jsonObj.isProSite ? jsonObj.basedUrlPro : jsonObj.basedUrl,
    timeout: 50000,
    validateStatus: (status) => {
        // ignore api exception status
        return true;
    }
});
export default HTTP;