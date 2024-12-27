// src/app.ts

import fastify from 'fastify';
import userRoutes from '../src/routes/userRoutes';
import categoryRoutes from '../src/routes/categoryRoutes';


import productRoutes from '../src/routes/productRoutes';
import { unitRoutes } from '../src/routes/unitRoutes';
import saleRoutes from '../src/routes/saleRoutes';
import { transactionRoutes } from '../src/routes/transactionRoute';
// import saleRoutes from './routes/saleRoutes';

export const app = fastify({ logger: true });

app.register(userRoutes, { prefix: '/users' });
app.register(categoryRoutes, { prefix: '/categories' });
app.register(productRoutes, { prefix: '/products' });
app.register(saleRoutes, { prefix: '/sales' });
app.register(unitRoutes , {prefix: '/units'})
app.register(transactionRoutes , {prefix: '/transactions'})


app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info(`Server listening at ${address}`);
  });
  
