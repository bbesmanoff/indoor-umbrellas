import express from 'express';
import api from './api';

const server = express();

if (server.get('env') !== 'production') {
  server.use('/', express.static('dist'));
}

server.use('/api', api);

export default server;
