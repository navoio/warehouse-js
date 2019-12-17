import chai from 'chai';
import { NavoClient } from '../../src';
import * as authNocks from './responses/auth';
import * as jobNocks from './responses/jobs';
const expect = chai.expect;
const apiDomain = 'https://my.navo.io/';
const apiLocation = `${apiDomain}api`;

describe('Navo Client', () => {
    it('should get auth token on demand when constructed with credentials', async () => {
        authNocks.successfulAuth(apiDomain);
        jobNocks.getJobSuccess(apiDomain);
        const client = new NavoClient(apiLocation, { clientId: 'test-user', apiKey: 'fake-key' });
        await client.jobs.get(1);
        return expect(client.token).to.be.ok;
    });
});
