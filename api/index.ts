import { app } from '../src/app';

const server = app;

// Handler untuk Vercel
export default async (req: any, res: any) => {
  try {
    await server.ready();
    server.server.emit('request', req, res);
  } catch (err) {
    console.error('Error in serverless function:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};
