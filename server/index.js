/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var Comment = require('../model/comments');
// var User = require('../model/user');
// var secrets = require('../secrets_template');
//
// var router = express.Router();
//
//
//
//
// //set our port to either a predetermined port number if you have set it up, or 3001
//
// //db config -- set your URI from mLab in secrets.js
// var mongoDB = secrets.requestSecret('db_uri');
// mongoose.connect(mongoDB, { useMongoClient: true })
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
// //now we should configure the APi to use bodyParser and look for JSON data in the body
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// //To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
//   //and remove cacheing so we get the most recent comments
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });
//
// //now  we can set the route path & initialize the API
// router.get('/', function(req, res) {
//   res.json({ message: 'API Initialized!'});
// });
//
// //adding the /comments route to our /api router
// router.route('/comments')
// //retrieve all comments from the database
//   .get(function(req, res) {
//     //looks at our Comment Schema
//     User.find(function(err, users) {
//       if (err)
//         res.send(err);
//       //responds with a json object of our database comments.
//       res.json(users)
//     });
//   })
//   //post new comment to the database
//   .post(function(req, res) {
//     console.log(req.body)
//     var user = new User();
//     (req.body.user_name) ? user.user_name = req.body.user_name : null;
//     // (req.body.text) ? user.text = req.body.text : null;
//
//     user.save(function(err) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Comment successfully added!' });
//     });
//   });
//
// // If you need a backend, e.g. an API, add your custom backend-specific middleware here
// // app.use('/api', myApi);
// app.use('/api', router);


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
