import express from 'express';
import Quandl from 'quandl';
import * as db from './models';
import {invariant} from './utils/stocks';
import bodyParser from 'body-parser';

const stocksEndpoint = express.Router();
stocksEndpoint.use(bodyParser.json());

stocksEndpoint.post('/transactions', (req, res) => {
  db.StockLedger.findAll({user_id: req.user.id}).then((transactions) => {
    const transaction = {...req.body.transaction, user_id: req.user.id};

    if (invariant([...transactions, transaction])) {
      db.StockLedger.create(transaction).then(() => res.sendStatus(200));
    } else {
      res.sendStatus(422); // Unprocessible Entry
    }
  });
});

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
