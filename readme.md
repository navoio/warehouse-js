# Navo Warehouse JS Client [![Build Status](https://travis-ci.org/navoio/warehouse-js.svg?branch=master)](https://travis-ci.org/navoio/warehouse-js)
JavaScript and Node client for accessing [Navo Warehouse](https://navo.io/products/warehouse/) data.

## Install
```bash
yarn add @navoio/warehouse
# or
npm install @navoio/warehouse
```

## Authentication
```js
import Navo from '@navoio/warehouse';

// Option 1- pass credentials into constructor
const client = new Navo(apiUrl, 'username', 'password');

// Option 2- call authorize() manually
const client = new Navo(apiUrl);
client.authorize('username', 'password');
```

## Jobs
Get all active jobs:
```js
const jobs = await client.jobs.getAll();
```

Get a single job by job id:
```js
const job = client.jobs.get(1);
```