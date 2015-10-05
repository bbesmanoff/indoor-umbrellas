import express from 'express';
import path from 'path';
import passport from 'passport';
import passport_facebook from 'passport-facebook';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import api from './api';

const server = express();
const FacebookStrategy = passport_facebook.Strategy;

server.use(cookieParser());
server.use(session({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
server.use(passport.initialize());
server.use(passport.session());

//TODO may want these secure somewhere?
var FACEBOOK_APP_ID = "819934004772176";
var FACEBOOK_APP_SECRET = "90ff6c2c0231f2b185acb5ecdc74dfae";


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
    console.log('serializing user' + user.id);
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    console.log('deserializing user');
    done(null, obj);
});

// Use the FacebookStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Facebook
//   profile), and invoke a callback with a user object.
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://vm344b.se.rit.edu/auth/facebook/callback'
}, function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Facebook profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Facebook account with a user record in your database,
      // and return that user instead.
        return done(null, profile);
    });
}));

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('user was authenticated');
        return next();
    } else{
        console.log('user was not authenticated');
        res.sendFile('login.html',  {root: path.join(__dirname, 'dist')});
    }
}

server.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['user_posts','publish_actions'] }), function(req, res){});

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
server.get('/auth/facebook/callback',
         passport.authenticate('facebook', { failureRedirect: '/login' }),
         function(req, res) {
  console.log('authentication passed, redirecting to home page');
  res.redirect('/index.html');
});


server.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login.html');
});

server.get('/', ensureAuthenticated, function (req, res) {
    res.redirect('/index.html');
});

if (server.get('env') !== 'production') {
  server.use('/', express.static('dist'));
}

server.use('/api', api);

export default server;
