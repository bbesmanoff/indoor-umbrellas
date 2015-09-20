import api from './api';
import express from 'express';
import browserify from 'browserify-middleware';

const app = express();

app.use(express.static('client'));
app.get('/js/bundle.js', browserify(__dirname + '/client/js/test.js'));

app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Server started.  Listening on port ${port}`);
