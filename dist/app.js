/*

    app.get('/', function (req, res) {
        res.send('Hello World!')
    })

    app.post('/', function (req, res) {
        res.send('Got a POST request')
    })

    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
    })

    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    })

    console.log(app.use(express.static('public')))

    app.use('/static', express.static('public'))



//////////////////////////////// Routing in Express \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port , () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


app.get('/about', (req, res) => {
    console.log("about page");

    res.send("About Page opened");
})


// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

  app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')

    res.send('Accessing the secret section ...')
    next() // pass control to the next handler
  })


  ///// Route Parameters

  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
  });

  ///////// Callback and next
  var cb0 = function (req, res, next) {
    console.log('CB0')
    next() // if there is no next we can not go to next function
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/example/c', [cb0, cb1, cb2])


////////// another example

  var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from D!')
  })

//////////////// Chainable routes

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    console.log('Add a book from post function')
    
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
    console.log('Update the book from put function')
  })


// /////////// Express router

// const birds = require('./birds')

// app.use('/birds', birds);

var myLogger = function(req, res, next) {
    console.log("LOGGED");
    next();
}

app.use(myLogger);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port);
*/
/*
////////////////// MIDDLEWARES

app.use(logger);

app.get('/', (req, res) => {
  res.send("Home Page");

  // res.send(req.requestTime);

  console.log("Home Page");
});

function logger(req,res,next) {
  console.log("Log");
  next();
}

function auth(req,res,next) {

  console.log("authentication");
  next();

}

// var requestTime = function(req, res, next) {
//   req.requestTime = Date.now();
//   next();
// }

app.get('/users', (req, res) => {
  res.send("Users Page");
  console.log("Users Page");
});

app.listen(port);



async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler
app.use(function (err, req, res, next) {
  res.status(400).send(err.message)
})

app.listen(port)
*/
// var cookieParser = require('cookie-parser')
// app.use('/user/:id', function (req, res, next) {
//   console.log("Request ID: " + req.params.id);
//   console.log("Request URL: " + req.originalUrl);
//   console.log('Request Type:', req.method)
//   if(req.params.id === '0') next('route');
//   else next()
// }, function(req, res, next) {
//   console.log("From Middleware")
//   next()
// });
// app.get('/user/:id', function (req, res, next) {
//   // res.send(`From users path`)
//   res.send("From users");
// })
// app.get('/user/:id', function (req, res, next) {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, function (req, res, next) {
//   // send a regular response
//   res.send('regular')
// })
// 
// handler for the /user/:id path, which sends a special response
// app.get('/user/:id', function (req, res, next) {
//   res.send('special')
// })
const express = require('express');
const app = express();
const port = 3000;
var router = express.Router();
// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log("Hello");
    console.log('Time:', Date.now());
    next();
});
// app.use('/:id', (req, res, next) => {
//   if(req.params.id == '0') {
//     console.log("Condition is satisfied");
//     next('route');
//   } else next();
// }, (req, res, next) => {
//   res.send("Response from middleware.");
//   console.log("Middleware");
// });
app.get('/:id', (req, res) => {
    res.send("Response from Home");
    console.log("Home");
});
app.listen(port);
//# sourceMappingURL=app.js.map