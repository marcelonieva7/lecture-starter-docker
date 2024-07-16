import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  http: {
    host: '0.0.0.0',
    port: Number(process.env.HTTP_PORT) || 4001,
  },
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'secret',
    database: process.env.POSTGRES_DATABASE || 'postgres',
  },
};
