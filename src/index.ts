import { AxiosInstance } from 'axios';
import base from './axios-base';
import JobsClient from './jobs';

export default class NavoClient {
    public url: string;
    public username: string;
    public password: string;
    public token: string;
    public jobs: JobsClient;
    public axios: AxiosInstance;

    constructor(url: string, username: string, password: string) {
        this.url = url;
        this.username = username;
        this.password = password;
        this.token = '';
        this.axios = base(url);
        this.jobs = new JobsClient(this.axios, this);
    }

    /**
     * Authorize Navo API user
     * @param username
     * @param password
     */
    public authorize(username: string, password: string): Promise<NavoClient> {
        const client: NavoClient = this;
        return client.axios.post('api/token', {
            username,
            password
        })
        .then(response => {
            const token: string = response.data.token;
            client.token = token;
            return client;
        });
    }

    public authorizeIfNeeded() {
        if (this.token) { return Promise.resolve(this); }
        return this.authorize(this.username, this.password);
    }
}
