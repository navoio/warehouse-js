import { NavoClient } from '../src';
import nock from 'nock';
const apiUrl = 'http://localhost:59626';
const clientId = 'TEST-USER',
    apiKey = 'TEST-USER-Key';

function getJob() {
    let client = new NavoClient(apiUrl, { clientId, apiKey });
    return client.jobs.get(1)
        .then(job => {
            console.log(job);
        });
}

function getJobs() {
    let client = new NavoClient(apiUrl, { clientId, apiKey });
    return client.jobs.getAll()
        .then(jobs => {
            console.log(jobs);
        });
}

nock.recorder.rec();
getJobs();