import {Router} from 'express';
import * as db from './models';
import bodyParser from 'body-parser';

const chats = Router();
chats.use(bodyParser.json());
chats.use(bodyParser.urlencoded());

// Creates a new event
chats.post('/', (req, res) => {
  const newChat = {
    'from': req.body.from,
    'date': req.body.date,
    'message': req.body.message
  };

  db.ChatHistory.create(newChat).then(() => {
    res.sendStatus(204);
  })
});

// Returns chats
chats.get('/', (req, res) => {
  //return history ordered by date, more recent first
  db.ChatHistory.findAll({order: 'date DESC'})
    .then((chatHistoryItems) => {
      res.send(JSON.stringify(chatHistoryItems));
    });
});

export default chats;
