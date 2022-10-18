import axios from 'axios';
import { basedUrl, basedUrlPro, isProSite } from './baseUrl.json';
// Create axios client, pre-configured with baseURL

let HTTP = axios.create({
    baseURL: isProSite ? basedUrlPro : basedUrl,
    timeout: 50000,
    validateStatus: (status) => {
        // ignore api exception status
        return true;
    }
});
export default HTTP;