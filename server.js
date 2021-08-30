var env = require('dotenv');
env.config()

var jwt = require('jsonwebtoken');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  db_pass = process.env.DB_PASS || '',
  db_user = process.env.DB_USER || 'todoList',
  mongoose = require('mongoose'),
  Task = require('./src/models/todoListModel');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.wq1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => { console.log(error)})
// mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true, useUnifiedTopology: true }); 


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require('./src/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);