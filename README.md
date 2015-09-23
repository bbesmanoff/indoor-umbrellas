[![Stories in Ready](https://badge.waffle.io/bbesmanoff/indoor-umbrellas.png?label=ready&title=Ready)](https://waffle.io/bbesmanoff/indoor-umbrellas)
# indoor-umbrellas
SWEN-344 Project

## Development Setup
First, you must have several dependencies installed:

* Node (>= 4.1.0)
* NPM (>= 2.14.0)

Then, clone the repo.  `cd` into that directory and run `npm install`.  This
will pull down all the project dependencies.  Afterwards, run `npm start` to
launch the server.

## Project Setup
The project is currently split into two separate 'mini-apps'.  The first of
which is under [api](api/).  This is where all server-side code lives.  It makes
use of an [Express
Router](http://expressjs.com/guide/routing.html#express-router) to route all
paths under the `/api` URL namespace.

The client code is under [client](client/) and mounted as the `/` namespace.  It
uses some magic in [server.js](server.js) to
[babelify](https://github.com/babel/babelify) and
[browserify](http://browserify.org/) the files served.  Ideally, this will be
cleaned up so that all client-related code/configuration lives under client.
For now, this will do.
