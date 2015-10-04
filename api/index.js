import {Router} from 'express';

const api = Router();
var events = [
  {
    title:'R1 Release',
    date:'10-05-2015',
    startTime:'8:00am',
    description:'We have to release our awesome web-app!'
  },
  {
    title:'Plan R2',
    date:'10-06-2015',
    startTime:'8:00am',
    description:'We have to plan our awesome second release!'
  },
  {
    title:'R1 Presentation',
    date:'10-05-2015',
    startTime:'8:00am',
    description:'We have to present our awesome web-app!'
  },
  {
    title:'R1 Planning',
    date:'10-04-2015',
    startTime:'12:00pm',
    description:'We have to plan our awesome web-app!'
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


export default api;
