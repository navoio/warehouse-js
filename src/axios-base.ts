import Axios from 'axios';

export default function setupAxios(serverUrl: string) {
    return Axios.create({
        baseURL: serverUrl,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        }
    });
}
