import {Router} from 'express';

const api = Router();
var events = [
  {
    title:'R1 Release',
    date:'10-03-2015',
    startTime:'12:00pm',
    description:'We have to release our awesome web-app!'
  },
  {
    title:'Ice Cream Event',
    date:'10-04-2015',
    startTime:'12:00pm',
    endTime:'1:00pm'
  },
  {
    title:'Watch Movies',
    date:'10-05-2015',
    startTime:'3:00am',
    endTime:'9:00pm',
    description:'Watching Movies All Day Long!'
  }
];

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

api.get('/hello', (req, res) => {
  res.send('world');
});

api.get('/events/:date', (req, res) => {
  var dateEvents = events.filter((e) => {
    var eStringDate = new Date(e.date).toDateString();
    var propsStringDate = new Date(req.params.date).toDateString();
    return (eStringDate == propsStringDate);
  });
  res.send(dateEvents);
});

api.get('/events', (req, res) => {
  res.send(events);
});

api.get('/stocks/:symbol', (req, res) => {
  var Quandl = require('quandl');
  var quandl = new Quandl({
    auth_token: process.env.quandl,
    api_version: 3
  });
  var stockInfo = stocks.filter((e) => {
    var data = quandl.dataset({source:"WIKI", table:e.symbol}, function(error, response){
      if (error) {
        console.log(error);
      }
      return response;
    });
  });
  res.send(stockInfo);
});

api.get('/stocks', (req, res) => {
  res.send(stocks);
});

export default api;
