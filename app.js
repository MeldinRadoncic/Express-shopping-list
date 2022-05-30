const express = require('express')
const ExpressError = require('./expressError')
const routes = require('./itemRoutes')


const app = express()

app.use(express.json())

app.use('/items',routes);

app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
  });

  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err.message,
    });
  });
  
  module.exports = app







app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
