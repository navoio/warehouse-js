import NavoClient from '../src';
import chai from 'chai';
const expect = chai.expect;
const apiUrl = 'http://localhost:59626/';

describe('NavoClient authorize()', () => {
    it('should return a token', () => {
        let client = new NavoClient(apiUrl, 'TEST', 'TEST123');
        return client.authorize('TEST', 'TEST123')
            .then(token => {
                expect(!!token).to.be.true;
            });
    });
});