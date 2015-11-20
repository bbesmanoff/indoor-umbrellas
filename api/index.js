import {Router} from 'express';
import EventsRouter from './events';
import ChatRouter from './chat';
import StocksRouter from './stocks';

const api = Router();

api.use('/events', EventsRouter);
api.use('/chat', ChatRouter);
api.use('/stocks', StocksRouter);

export default api;
