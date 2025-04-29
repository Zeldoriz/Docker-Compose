const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname + '../../../.env') });

import type { Knex } from 'knex';

console.log(process.env);

export default {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT)
    },
    migrations: './migrations'
  },
  migrate: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT)
    },
    migrations: './migrations'
  }
} as { [key: string]: Knex.Config };
