import express from 'express';
import Quandl from 'quandl';
import * as db from './models';
import {invariant} from './utils/stocks';
import bodyParser from 'body-parser';

const stocksEndpoint = express.Router();
stocksEndpoint.use(bodyParser.json());

// returns the `where` filter for a given user
const getFilterFor = (userId) => ({where: {user_id: userId}});

stocksEndpoint.get('/transactions', (req, res) => {
  const filter = getFilterFor(req.user.id);

  db.StockLedger.findAll(filter).then((transactions) => {
    res.send(JSON.stringify(transactions));
  });
});

stocksEndpoint.post('/transactions', (req, res) => {
  const filter = getFilterFor(req.user.id);

  db.StockLedger.findAll(filter).then((transactions) => {
    const transaction = {...req.body.transaction, user_id: req.user.id};

    if (invariant([...transactions, transaction])) {
      db.StockLedger.create(transaction).then(() => res.sendStatus(200));
    } else {
      res.sendStatus(422); // Unprocessible Entry
    }
  });
});

stocksEndpoint.delete('/transactions', (req, res) => {
  db.StockLedger.destroy(getFilterFor(req.user.id))
    .then(() => res.sendStatus(200));
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
