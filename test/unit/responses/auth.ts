import nock from 'nock';
const username = 'test-user',
    password = 'test-password';

function badPassword(apiUrl: string) {
    nock(apiUrl)
        .post('/api/token')
        .reply(400, "Invalid username or password.");
}

function successfulAuth(apiUrl: string) {
    nock(apiUrl)
        .post('/api/token')
        .reply(200, {
            "token": "ryJhbGciOiJIUzI1NiIsInR5cCI6IkpXyCJ9ieyJzdWIiOiJU" +
                "RVNUIiwianRpIjoiM2E3OGQwMDYtYmU3Yy00YTRlLWFmYjItMzgwY2MwN" +
                "zc0YTU5IiwiaWF0Ijox21QwNjA0MTA3LCJuYmYiOjE1NDA2MDQxMDcsImV" +
                "4cCI6MTU0MDYwNDQwNywiaXNzIjoiTmF2byIsImF1ZCI6Ik5hdm9BdWRpZW" +
                "5jZSJ9TpzIPCkBr0JD-OL4F7TL7rj0Cf7otyYBdnE-idaWeP00",
            "expires": 300
        });
}

export {
    badPassword,
    successfulAuth
};