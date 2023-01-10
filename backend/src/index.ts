import Fastify from 'fastify';
import cors from '@fastify/cors'

const start = async () => {
  const fastify = Fastify({
    logger: true,
  });

  try {
    await fastify.register(cors);
    
    fastify.get('/ping', async (request, reply) => {
      return { status: 'ok' };
    });

    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();