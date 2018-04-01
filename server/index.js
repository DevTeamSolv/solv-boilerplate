
/* eslint consistent-return:0 */

const express = require('express');
const path = require('path');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('../model/comments');
var User = require('../model/user');
var Referral = require('../model/refferal');
var secrets = require('../secrets_template');

var router = express.Router();




//set our port to either a predetermined port number if you have set it up, or 3001

//db config -- set your URI from mLab in secrets.js
var mongoDB = secrets.requestSecret('db_uri');
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'https://www.solutiontoken.net');
  // res.setHeader('Access-Control-Allow-Origin', 'http://ec2-52-201-203-83.compute-1.amazonaws.com');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {

  // for(var i=0; i<100; i++){
  //   var ref = new Referral();
  //
  //   var rand = randomstring.generate({
  //     length: 6,
  //     charset: 'alphanumeric'
  //   });
  //
  //   ref.ref_code = rand;
  //   ref.save(function(err) {
  //     if (err)
  //       res.send(err);
  //   });
  //   console.log(ref)
  //
  // }

  res.json({ message: 'API Initialized!'});
});

router.route('/login')
  .post(function (req, res) {


    // console.log(req.body)
    var user = new User();
    var message = "";
    var success = false;


    User.find(function(err, users) {
      var already = false;

      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      // if(users.email === "tauqeer@gmail.com" ) {
      // console.log(req.body.eth_address, obj.eth_address)
      users.map(function (obj) {
        if(obj.eth_address === req.body.eth_address && !success) {
          // console.log(req.body.eth_address, obj.eth_address, 'in ---')
          already = true
          user = obj;
          message = "successful"
          success = true
          res.json({ message, success, user });
        }
      })
      //
      if(!already) {
        console.log(already, " ----  noy in");
          message = 'invalid'
          success = false
          res.json({ message, success });
      }
    });


  });




//adding the /comments route to our /api router
router.route('/users')
//retrieve all comments from the database
  .get(function(req, res) {
    // console.log('get in ')
    //looks at our Comment Schema
    User.find(function(err, users) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(users)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    // console.log(req.body)
    var user = new User();
    var _referral = new Referral();
    var message = "";
    var success = false;


    User.find(function(err, users) {
      var already = false;
      var email_already = false;
      var address_already = false;
      var ref_already = false;
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      // if(users.email === "tauqeer@gmail.com" ) {
      users.map(function (obj) {
        if((obj.email === req.body.email) && !email_already && !already) {
          email_already = true
          already = true
          message = "email"
          success = false
          res.json({ message, success });
        }
        if((obj.eth_address === req.body.eth_address) && !address_already && !already) {
          address_already = true
          already = true
          message = "address"
          success = false
          res.json({ message, success });
        }
      })
      // console.log(req.body.ref_code)
      if(req.body.ref_code) {
        Referral.find(function (err, ref) {
          var length = ref.length
          ref.map(function (obj, index) {
            // console.log(obj, index)
            if((obj.ref_code === req.body.ref_code) && !ref_already && !already) {
              ref_already = true;
              // console.log(obj, "---")
              // already = true
              // message = "invalid_referral"
              // success = false
              // res.json({ message, success });

              // console.log(already, " ----   in");
              (req.body.first_name) ? user.first_name = req.body.first_name : null;
              (req.body.last_name) ? user.last_name = req.body.last_name : null;
              (req.body.email) ? user.email = req.body.email : null;
              (req.body.eth_address) ? user.eth_address = req.body.eth_address : null;
              (req.body.eth_amount) ? user.eth_amount = req.body.eth_amount : null;
              (req.body.ref_code) ? user.ref_code = req.body.ref_code : null;
              user.save(function (err) {
                if (err)
                  res.send(err);
                message = 'User successfully registered!'
                success = true
                res.json({message, success});
              })
            }
            if(length === index+1 && !ref_already && !already) {
              ref_already = true
              // console.log(obj, "---")
              // already = true
              // message = "invalid_referral"
              // success = false
              // res.json({ message, success });

              // console.log(already, " ----   in");
              // (req.body.first_name) ? user.first_name = req.body.first_name : null;
              // (req.body.last_name) ? user.last_name = req.body.last_name : null;
              // (req.body.email) ? user.email = req.body.email : null;
              // (req.body.eth_address) ? user.eth_address = req.body.eth_address : null;
              // (req.body.eth_amount) ? user.eth_amount = req.body.eth_amount : null;
              // (req.body.ref_code) ? user.ref_code = req.body.ref_code : null;
              // user.save(function (err) {
              //   if (err)
              //     res.send(err);
                message = 'invalid_ref'
                success = false
                res.json({message, success});
              // })
            }

          })
        })
      }
      //
      if(!already && !req.body.ref_code) {
        // console.log(already, " ----   in");
        (req.body.first_name) ? user.first_name = req.body.first_name : null;
        (req.body.last_name) ? user.last_name = req.body.last_name : null;
        (req.body.email) ? user.email = req.body.email : null;
        (req.body.eth_address) ? user.eth_address = req.body.eth_address : null;
        (req.body.eth_amount) ? user.eth_amount = req.body.eth_amount : null;
        (req.body.ref_code) ? user.ref_code = req.body.ref_code : null;
        user.save(function(err) {
          if (err)
            res.send(err);
          message = 'User successfully registered!'
          success = true
          res.json({ message, success });
        });
      }
    });
  });

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
// const PORT = '8000'
app.use('/api', router);
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});


// In production we need to pass these values in instead of relying on webpack
// setup(app, {
//   outputPath: resolve(process.cwd(), 'build'),
//   publicPath: '/',
// });

// Serve the index.html for all the other requests so that the
// router in the javascript app can render the necessary components
// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname+'/build/index.html'));
//   //__dirname : It will resolve to your project folder.
// });
// get the intended host and port number, use localhost and port 3000 if not provided
// const customHost = argv.host || process.env.HOST;
// const host = customHost || null; // Let http.Server use its default IPv6/4 host
// const prettyHost = customHost || 'localhost';

// Start your app.
// app.listen(port, host, (err) => {
//   if (err) {
//     return logger.error(err.message);
//   }
//   // Connect to ngrok in dev mode
//   if (ngrok) {
//     ngrok.connect(port, (innerErr, url) => {
//       if (innerErr) {
//         return logger.error(innerErr);
//       }
//
//       logger.appStarted(port, prettyHost, url);
//     });
//   } else {
//     logger.appStarted(port, prettyHost);
//   }
// });
