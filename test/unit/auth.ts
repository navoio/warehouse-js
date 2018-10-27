import NavoClient from '../../src';
import { Job, JobStatus } from '../../src/job';
import chai from 'chai';
import nock from 'nock';
import * as jobNocks from './responses/jobs'
import * as authNocks from './responses/auth'
const expect = chai.expect;
const apiUrl = 'https://my.navo.io/';

describe('Navo Client', () => {

    it('should get auth token on demand when constructed with credentials', () => {
        authNocks.successfulAuth(apiUrl);
        jobNocks.getJobSuccess(apiUrl);
        let client = new NavoClient(apiUrl, 'test-user', 'fake-password');
        client.jobs.get(1)
            .then(() => {
                expect(!!client.token).to.be.true;
            });
    });
});