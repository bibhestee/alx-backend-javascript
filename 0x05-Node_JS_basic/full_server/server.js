#!/usr/bin/env node
/**
 * Inside the file named full_server/server.js, create a small Express server:

 * It should use the routes defined in full_server/routes/index.js
 * It should use the port 1245
 */
import express from 'express';
import routes from './routes/index';

const app = express();

app.use(routes);

app.listen(1245, '127.0.0.1', () => {
  console.log('app is running');
});

export default app;
