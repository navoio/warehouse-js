import { AxiosInstance } from 'axios';
import NavoClient from '.';
import { Job } from './job';

export default class JobsClient {
    public baseClient: NavoClient;
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance, client: NavoClient) {
        this.axios = axios;
        this.baseClient = client;
    }

    /**
     * Get all active Navo jobs.
     */
    public async getAll(): Promise<Job[]> {
        const client = this;
        return (await client.baseClient.authorizeIfNeeded())
            .axios
            .get<Job[]>('jobs', client.buildAuthHeader(client.baseClient.token))
            .then(response => response.data);
    }

    /**
     * Get Navo job by id.
     * @param id Navo job id
     */
    public async get(id: number): Promise<Job> {
        const client = this;
        return (await client.baseClient.authorizeIfNeeded())
            .axios
            .get<Job>(`jobs/${id}`, client.buildAuthHeader(client.baseClient.token))
            .then(response => response.data);
    }

    private buildAuthHeader(token: string) {
        return {
            headers: { Authorization: 'Bearer ' + token }
        };
    }
}
