import { AxiosInstance } from "axios";
import NavoClient from ".";

export default class JobsClient {
    baseClient: NavoClient;
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance, client: NavoClient) {
        this.axios = axios;
        this.baseClient = client;
    }

    getAll() : Promise<any[]> {
        return this.baseClient.authorizeIfNeeded(
            this.baseClient.token, 
            this.baseClient.username, 
            this.baseClient.password
        ).then(token => {
            return this.axios.get('api/jobs', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => response.data);
        });
    }

    get(id: number) : Promise<any> {
        return this.baseClient.authorizeIfNeeded(
            this.baseClient.token, 
            this.baseClient.username, 
            this.baseClient.password
        ).then(token => {
            return this.axios.get(`api/jobs/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => response.data);
        });
    }
}