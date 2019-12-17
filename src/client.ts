import { AxiosInstance } from 'axios';
import base from './axios-base';
import { JobsClient } from './jobs';

/**
 * Navo Client for interfacing with a Navo server.
 */
export class NavoClient {
    /** Base URL of Navo API */
    public url: string;
    /** Client ID */
    public clientId: string;
    /** API private key */
    public apiKey: string;
    /** Server-generated authorization token */
    public token: string;
    /** Namespace for accessing Navo jobs */
    public jobs: JobsClient;
    public axios: AxiosInstance;

    /**
     * Navo client constructor
     * @param url Base path of the Navo API
     * @param credentials API credentials
     */
    constructor(url: string, credentials?: { clientId: string, apiKey: string }) {
        this.url = url;
        if (credentials) {
            this.clientId = credentials.clientId;
            this.apiKey = credentials.apiKey;
        }
        this.token = '';
        this.axios = base(url);
        this.jobs = new JobsClient(this.axios, this);
    }

    /**
     * Authenticates Navo API client
     * @param clientId Client ID
     * @param apiKey Private API key
     */
    public authenticate(clientId: string, apiKey: string): Promise<NavoClient> {
        const client: NavoClient = this;
        return client.axios.post('token', {
            clientId,
            apiKey
        })
            .then(response => {
                const token: string = response.data.token;
                client.token = token;
                return client;
            });
    }

    public authorizeIfNeeded() {
        if (this.token) { return Promise.resolve(this); }
        return this.authenticate(this.clientId, this.apiKey);
    }
}
