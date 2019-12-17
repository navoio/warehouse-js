import chai from 'chai';
import { NavoClient } from '../../src';
import * as authNocks from './responses/auth';
import * as jobNocks from './responses/jobs';
const expect = chai.expect;
const apiDomain = 'https://my.navo.io/';
const apiLocation = `${apiDomain}api`;

describe('Navo Jobs Client', () => {

    it('should return an individual job', async () => {
        authNocks.successfulAuth(apiDomain);
        jobNocks.getJobSuccess(apiDomain);
        const client = new NavoClient(apiLocation, { clientId: 'client-id', apiKey: 'api-key' });
        const job = await client.jobs.get(1);
        return expect(job).to.be.ok;
    });

    it('should return all active jobs', async () => {
        authNocks.successfulAuth(apiDomain);
        jobNocks.getJobsSuccess(apiDomain);
        const client = new NavoClient(apiLocation, { clientId: 'client-id', apiKey: 'api-key' });
        const jobs = await client.jobs.getAll();
        return expect(jobs.length).to.be.greaterThan(0);
    });
});
