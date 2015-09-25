import express from 'express';

const server = express();

if (server.get('env') !== 'production') {
  server.use('/', express.static('dist'));
}

export default server;
