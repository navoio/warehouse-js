import { AxiosInstance } from 'axios';
import base from './axios-base';
import JobsClient from './jobs';

/**
 * Navo Client for interfacing with a Navo server.
 */
export default class NavoClient {
    public url: string;
    public username: string;
    public password: string;
    public token: string;
    public jobs: JobsClient;
    public axios: AxiosInstance;

    /**
     * Navo client constructor
     * @param url Base path of the Navo API
     * @param credentials API credentials
     */
    constructor(url: string, credentials?: { username: string, password: string }) {
        this.url = url;
        if (credentials){
            this.username = credentials.username;
            this.password = credentials.password;
        }
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
        return client.axios.post('token', {
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
