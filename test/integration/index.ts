import chai from 'chai';
import NavoClient from '../../src';
const expect = chai.expect;
const apiUrl = 'http://localhost:59626/';

describe('NavoClient authorize()', () => {
    it('should return a token', () => {
        const client = new NavoClient(apiUrl, 'TEST', 'TEST123');
        return client.authorize('TEST', 'TEST123')
            .then(_ => {
                expect(!!client.token).to.be.true;
            });
    });
});
