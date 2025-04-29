// Abstraction layer to handle knex configuration per enviornment.
// const environment = process.env.NODE_ENV || 'development';
import Knex from 'knex';
import configs from './knexfile';

export const database = Knex(configs['development']);
