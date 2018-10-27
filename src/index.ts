import base from './axios-base';
import JobsClient from './jobs';
import { AxiosInstance } from 'axios';

export default class NavoClient {
    url: string;
    username: string;
    password: string;
    token: string;
    jobs: JobsClient;
    axios: AxiosInstance;

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
    authorize(username: string, password: string): Promise<NavoClient> {
        const client: NavoClient = this;
        return client.axios.post('api/token', {
            username: username,
            password: password
        })
        .then(function (response) {
            const token: string = response.data.token;
            client.token = token;
            return client;
        });
    }

    authorizeIfNeeded() {
        if (this.token) return Promise.resolve(this);
        return this.authorize(this.username, this.password);
    }
}
