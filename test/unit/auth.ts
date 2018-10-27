import chai from 'chai';
import nock from 'nock';
import NavoClient from '../../src';
import { Job, JobStatus } from '../../src/job';
import * as authNocks from './responses/auth';
import * as jobNocks from './responses/jobs';
const expect = chai.expect;
const apiUrl = 'https://my.navo.io/';

describe('Navo Client', () => {

    it('should get auth token on demand when constructed with credentials', () => {
        authNocks.successfulAuth(apiUrl);
        jobNocks.getJobSuccess(apiUrl);
        const client = new NavoClient(apiUrl, 'test-user', 'fake-password');
        client.jobs.get(1)
            .then(() => {
                expect(!!client.token).to.be.true;
            });
    });
});
