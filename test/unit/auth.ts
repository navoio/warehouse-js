import chai from 'chai';
import nock from 'nock';
import NavoClient from '../../src';
import { Job, JobStatus } from '../../src/job';
import * as authNocks from './responses/auth';
import * as jobNocks from './responses/jobs';
const expect = chai.expect;
const apiDomain = 'https://my.navo.io/';
const apiLocation = `${apiDomain}api`;

describe('Navo Client', () => {
    it('should get auth token on demand when constructed with credentials', async () => {
        authNocks.successfulAuth(apiDomain).log(console.log);
        jobNocks.getJobSuccess(apiDomain);
        const client = new NavoClient(apiLocation, { username: 'test-user', password: 'fake-password' });
        const job = await client.jobs.get(1);
        expect(client.token).to.be.ok;
    });
});
