import chai from 'chai';
import NavoClient from '../../src';
const expect = chai.expect;
const apiUrl = 'https://my.navo.io/api';

describe('NavoClient authorize()', () => {
    it('should return a token', async () => {
        const client = new NavoClient(apiUrl);
        await client.authorize('TEST', 'TEST123');
        expect(client.token).to.be.ok;
    });
});
