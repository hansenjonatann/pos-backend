import {app} from '../src/app';

const server = app;

// Handler untuk Vercel
export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit('request', req, res);
};
