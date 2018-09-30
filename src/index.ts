import base from './axios-base';
import JobsClient from './jobs';
import { AxiosInstance } from 'axios';

export default class NavoClient {
    url: string;
    username: string;
    password: string;
    token: string;
    jobs: JobsClient;
    private axios: AxiosInstance;

    constructor(url: string, username: string, password: string) {
        this.url = url;
        this.username = username;
        this.password = password;
        this.token = '';
        this.axios = base(url);
        this.jobs = new JobsClient(this.axios, this);
    }

    authorize(username: string, password: string) {
        const self: NavoClient = this;
        return this.axios.post('api/token', {
            username: username,
            password: password
        })
        .then(function (response) {
            const token: string = response.data.token;
            self.token = token;
            return token;
        });
    }

    authorizeIfNeeded(token: string, username: string, password: string) {
        if (token) return Promise.resolve(token);
        return this.authorize(username, password);
    }
}
