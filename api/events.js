import {Router} from 'express';
const events = Router();

// Returns all events for the current user
events.get('/', (req, res) => {
  console.log(req.user);
  res.send([]); // TODO
});

// Returns events on the specified date
events.get('/:date', (req, res) => {
  var dateEvents = [].filter((e) => { // TODO
    var eStringDate = new Date(e.date).toDateString();
    var propsStringDate = new Date(req.params.date).toDateString();
    return (eStringDate == propsStringDate);
  });
  res.send(dateEvents);

});

// Creates a new event
events.post('/', (req, res) => {
  console.log(req.user);
  console.log(req.body.newEvent);
});

export default events;
