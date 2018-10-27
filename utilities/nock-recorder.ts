import NavoClient from '../src';
import { Job, JobStatus } from '../src/job';
import nock from 'nock';
const apiUrl = 'http://localhost:59626';
const username = 'TEST',
    password = 'TEST123';

function getJob(){
    let client = new NavoClient(apiUrl, username, password);
    return client.jobs.get(1)
        .then(job => {
            console.log(job);
        });
}

function getJobs(){
    let client = new NavoClient(apiUrl, username, password);
    return client.jobs.getAll()
        .then(jobs => {
            console.log(jobs);
        });
}

nock.recorder.rec();
getJobs();