var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./src/models/todoListModel');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true, useUnifiedTopology: true }); 


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require('./src/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);