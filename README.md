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
[Gulp][gulp] is used to build and serve the project.  Behind the scenes, `npm
starts` calls `gulp`.  The default task is configured to build the project,
serve the project, and then watch for changes to project files.  When you modify
any of the project files, it will rebuild all files.

The development server, spawned through `gulp`, will host the built files
through the use of `express.static()`.  This is turned off when the app is in
production, as the front-facing web server will serve the static files.

[gulp]: http://gulpjs.com/

### Local Development
To authenticate with Facebook, each machine must match a subdomain of the
configured host (in our case, the vm).  To do this, you must update your [hosts
file][hosts] to have the entry
```
127.0.0.1 localhost.vm344b.se.rit.edu
```
Then, access the server through `http://localhost.vm344b.se.rit.edu:3000`.

### Environment Settings
This project uses [dotenv](https://github.com/motdotla/dotenv) to store its
sensitive information.  The file `.env` is appropriately ignored by git.  To
construct it, copy `env.sample` to `.env` at the root of the project and edit
it to include the information you need.

[hosts]: https://en.wikipedia.org/wiki/Hosts_(file)
