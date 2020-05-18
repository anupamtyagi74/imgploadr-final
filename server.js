const express = require('express'),
    config = require('./server/configure'),
    mongoose = require('mongoose');

var app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

app = config(app);
var url = process.env.MONGOLAB_URI;
mongoose.connect(url,{ useMongoClient: true,  useNewUrlParser: true} );
mongoose.connection.on('open',()=>{
    console.log('Mongoose connected.');
});

var server = app.listen(app.get('port'), ()=>{
    console.log('Server up: http://localhost:' + app.get('port'));
});

