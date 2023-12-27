import { Knex, knex } from "knex";
import { config } from "./config";

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    requestTimeout: 5000,
  },
};

export const database = knex(knexConfig);
