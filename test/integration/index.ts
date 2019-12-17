import chai from 'chai';
import { NavoClient } from '../../src';
const expect = chai.expect;
const apiUrl = 'https://my.navo.io/api';

describe('NavoClient authenticate()', () => {
    it('should set a token', async () => {
        const client = new NavoClient(apiUrl);
        await client.authenticate('TEST', 'TEST123');
        return expect(client.token).to.be.ok;
    });
});
