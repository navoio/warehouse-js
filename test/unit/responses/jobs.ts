import nock from 'nock';

function getJobSuccess(apiUrl: string) {
    nock(apiUrl)
        .get('/api/jobs/1')
        .reply(200, {
            id: '1',
            name: 'Job Alpha',
            storedPartCount: 3,
            status: 2,
            dateCreated: '2018-10-18T21:35:07.762031-04:00'
        });
}

function getJobsSuccess(apiUrl: string) {
    nock(apiUrl)
        .get('/api/jobs')
        .reply(200, [
            {
                id: '1', name: 'Alpha', storedPartCount: 3, status: 2,
                dateCreated: '2018-10-18T21:59:15.927327-04:00'
            },
            {
                id: '2', name: 'Bravo', storedPartCount: 4, status: 0,
                dateCreated: '2018-10-19T21:59:15.927332-04:00'
            },
            {
                id: '3', name: 'Charlie', storedPartCount: 3, status: 3,
                dateCreated: '2018-10-20T21:59:15.927333-04:00'
            },
            {
                id: '4', name: 'Delta', storedPartCount: 2, status: 1,
                dateCreated: '2018-10-25T21:59:15.927335-04:00'
            }
        ]);
}

export {
    getJobSuccess,
    getJobsSuccess
};
