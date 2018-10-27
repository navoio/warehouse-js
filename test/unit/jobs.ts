import NavoClient from '../../src';
import { Job, JobStatus } from '../../src/job';
import chai from 'chai';
import nock from 'nock';
import * as jobNocks from './responses/jobs'
import * as authNocks from './responses/auth'
const expect = chai.expect;
const apiUrl = 'https://my.navo.io/';

describe('Navo Jobs Client', () => {

    it('should return an individual job', () => {
        authNocks.successfulAuth(apiUrl);
        jobNocks.getJobSuccess(apiUrl);
        let client = new NavoClient(apiUrl, 'test-user', 'fake-password');
        return client.jobs.get(1)
            .then(job => {
                expect(!!job).to.be.true;
            });
    });

    it('should return all active jobs', () => {
        authNocks.successfulAuth(apiUrl);
        jobNocks.getJobsSuccess(apiUrl);
        let client = new NavoClient(apiUrl, 'test-user', 'fake-password');
        return client.jobs.getAll()
            .then(jobs => {
                expect(jobs.length).to.be.greaterThan(0);
            });
    });
});