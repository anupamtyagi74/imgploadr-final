const express = require('express'),
    config = require('./server/configure'),
    mongoose = require('mongoose');

var app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

app = config(app);

mongoose.connect('mongodb://imgploadr-finaldb:Anuayu@1@ds215380.mlab.com:15380/heroku_0qmmwqj9',{ useMongoClient: true} );
mongoose.connection.on('open',()=>{
    console.log('Mongoose connected.');
});

var server = app.listen(app.get('port'), ()=>{
    console.log('Server up: http://localhost:' + app.get('port'));
});

