# Navo Warehouse JS Client [![Actions Status](https://github.com/navoio/warehouse-js/workflows/Node%20CI/badge.svg)](https://github.com/navoio/warehouse-js/actions)
JavaScript and Node client for accessing [Navo Warehouse](https://navo.io/products/warehouse/) data.

## Install
```bash
yarn add @navoio/warehouse
# or
npm install @navoio/warehouse
```

## Authentication
```js
import { NavoClient } from '@navoio/warehouse';

// Option 1- pass credentials into constructor
const client = new NavoClient(apiUrl, 'client-id', 'api-key');

// Option 2- call authorize() manually
const client = new NavoClient(apiUrl);
client.authorize('client-id', 'api-key');
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