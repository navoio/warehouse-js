# Navo Warehouse JS Client [![Build Status](https://travis-ci.org/navoio/warehouse-js.svg?branch=master)](https://travis-ci.org/navoio/warehouse-js)
JavaScript and Node client for accessing Navo Warehouse data.

## Install
```bash
npm install @navoio/warehouse
```

## Authentication
```js
import Navo from '@navoio/warehouse';
// option 1- pass credentials into constructor
let client = new Navo(apiUrl, 'username', 'password');

// option 2- call authorize() manually
let client = new Navo(apiUrl);
client.authorize('username', 'password');
```

## Jobs
Get all active jobs:
```js
client.jobs.getAll()
    .then(jobs => {
        console.log(jobs);
    });
```

Get job by ID:
```js
client.jobs.get(1)
    .then(job => {
        console.log(job);
    });
```