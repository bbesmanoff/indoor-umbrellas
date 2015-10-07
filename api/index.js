import {Router} from 'express';
import Quandl from 'quandl';
import EventsRouter from './events';
var quandl = new Quandl({
  auth_token: process.env.QUANDL_API_KEY,
  api_version: 3
});

const api = Router();

api.get('/stocks/:symbol', (req, res) => {
  quandl.dataset({source:"WIKI", table:req.params.symbol}, function(error, response){
    if (error) {
      throw(error);
    }
    res.send(response);
  });
});

api.get('/top-stocks', (req, res) => {
  res.send(JSON.stringify(['XRX', 'XOM', 'GOOG', 'DJI', 'AAPL']));
});

api.use('/events', EventsRouter);

export default api;
