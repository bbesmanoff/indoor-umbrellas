import {Router} from 'express';

const api = Router();

api.get('/hello', (req, res) => {
  res.send('world');
});

export default api;
