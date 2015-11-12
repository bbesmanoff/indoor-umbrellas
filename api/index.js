import {Router} from 'express';
import Quandl from 'quandl';
import EventsRouter from './events';
var quandl = new Quandl({
  auth_token: process.env.QUANDL_API_KEY,
  api_version: 3
});

const api = Router();

var stocks = [
  {
    symbol:'AAPL',
    price:'100.00',
    high:'102.75',
    low:'99.32',
    yrhigh:'401.09',
    yrlow:'94.41'
  },
  {
    symbol:'DJI',
    price:'17360.02',
    high:'17365.68',
    low:'17217.44',
    yrhigh:'19899.37',
    yrlow:'16289.21'
  },
  {
    symbol:'GOOG',
    price:'345.67',
    high:'348.26',
    low:'345.52',
    yrhigh:'360.61',
    yrlow:'332.61'
  },
  {
    symbol:'XOM',
    price:'34.35',
    high:'34.37',
    low:'33.29',
    yrhigh:'37.27',
    yrlow:'29.01'
  },
  {
    symbol:'XRX',
    price:'9.21',
    high:'9.34',
    low:'8.93',
    yrhigh:'12.25',
    yrlow:'8.32'
  }
];

api.get('/stocks/:symbol', (req, res) => {
  quandl.dataset({source:"WIKI", table:req.params.symbol}, function(error, response){
    if (error) {
      throw(error);
    }
    res.send(response);
  });
});

api.get('/top-stocks', (req, res) => {
  res.send(stocks);
});

api.use('/events', EventsRouter);

export default api;
