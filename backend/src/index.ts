import Fastify from 'fastify';
import cors from '@fastify/cors'
import { config } from './config';
import { database } from './database';

const start = async () => {
  const fastify = Fastify({
    logger: true,
  });

  try {
    await fastify.register(cors);

    fastify.get('/ping', (_, reply) => {
      reply.status(204).send();
    });

    fastify.get('/status', async () => {
      let databaseOk = false;

      try {
        await database.raw('SELECT 1');
        databaseOk = true;
      } catch (e) {
        fastify.log.error(e);
      }

      return {
        http: 'ok',
        database: databaseOk ? 'ok' : 'error',
      };
    });

    await fastify.listen({ host: config.http.host, port: config.http.port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
