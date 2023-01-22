import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  http: {
    port: Number(process.env.HTTP_PORT) || 4000,
  },
};
