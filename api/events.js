import {Router} from 'express';
import * as db from './models';
import bodyParser from 'body-parser';

const events = Router();
events.use(bodyParser.json());

// Returns all events for the current user
events.get('/', (req, res) => {
  db.CalendarEvent.findAll({where: {account_id: req.user.id}})
    .then((calendarEvents) => {
      res.send(JSON.stringify(calendarEvents));
    });
});

// Returns events on the specified date
events.get('/:date', (req, res) => {
  const searchDate = new Date(req.params.date);

  const tomorrowDate = new Date(req.params.date);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  db.CalendarEvent.findAll({where: {
    account_id: req.user.id,
    startDateTime: {
      $and: {
        $gte: searchDate,
        $lt: tomorrowDate
      }
    }
  }}).then((calendarEvents) => res.send(JSON.stringify(calendarEvents)));
});

// Creates a new event
events.post('/', (req, res) => {
  const newEvent = {...req.body.newEvent, account_id: req.user.id};

  db.CalendarEvent.create(newEvent).then(() => {
    res.sendStatus(200);
  })
});

export default events;
