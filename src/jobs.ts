import { AxiosInstance } from "axios";
import NavoClient from ".";
import { Job } from "./job";

export default class JobsClient {
    baseClient: NavoClient;
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance, client: NavoClient) {
        this.axios = axios;
        this.baseClient = client;
    }

    /**
     * Get all active Navo jobs.
     */
    getAll(): Promise<Job[]> {
        const client = this;
        return client.baseClient.authorizeIfNeeded(
            client.baseClient.token,
            client.baseClient.username,
            client.baseClient.password
        ).then(token => {
            return client.axios.get('api/jobs', client.buildAuthHeader(token))
                .then(response => response.data);
        });
    }

    /**
     * Get Navo job by id.
     * @param id Navo job id
     */
    get(id: number): Promise<Job> {
        const client = this;
        return client.baseClient.authorizeIfNeeded(
            client.baseClient.token,
            client.baseClient.username,
            client.baseClient.password
        ).then(token => {
            return client.axios
                .get(`api/jobs/${id}`, client.buildAuthHeader(token))
                .then(response => response.data);
        });
    }

    private buildAuthHeader(token: string) {
        return {
            headers: { 'Authorization': 'Bearer ' + token }
        };
    }
}