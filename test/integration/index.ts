import { AxiosError } from 'axios';
import chai from 'chai';
import { NavoClient } from '../../src';
const expect = chai.expect;
const apiUrl = 'https://my.navo.io/api';
const credentials = {
    clientId: 'client',
    apiKey: 'api-key'
};

describe('NavoClient authenticate()', () => {
    it('should set a token', async () => {
        const client = new NavoClient(apiUrl);
        await client.authenticate(credentials.clientId, credentials.apiKey);
        return expect(client.token).to.be.ok;
    });

    it('should return a 400 error with invalid credentials', async () => {
        const client = new NavoClient(apiUrl);
        try {
            await client.authenticate(credentials.clientId, '');
        } catch (error) {
            return expect((error as AxiosError).response?.status).to.equal(400);
        }
    });
});
