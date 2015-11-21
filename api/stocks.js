import express from 'express';
import Quandl from 'quandl';

const stocksEndpoint = express.Router();

stocksEndpoint.get('/top-stocks', (req, res) => {
  res.send(JSON.stringify(['XRX', 'XOM', 'GOOG', 'AMZN', 'AAPL']));
});

stocksEndpoint.get('/search', (req, res) => {
  const quandl = new Quandl({
    auth_token: process.env.QUANDL_API_KEY,
    api_version: 3
  });

  quandl.dataset({source:"WIKI", table:req.query.symbol}, function(error, response){
    if (error) {
      throw(error);
    }
    res.send(response);
  });
});

export default stocksEndpoint;
