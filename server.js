const express = require('express'),
    config = require('./server/configure'),
    mongoose = require('mongoose');
var url = process.env.MONGODB_URI || 'mongodb://localhost/imgPloadr';
var app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

app = config(app);

mongoose.connect(url, {
	useMongoClient : true
});
mongoose.connection.on('open',()=>{
    console.log('Mongoose connected.');
});

var server = app.listen(app.get('port'), ()=>{
    console.log('Server up: http://localhost:' + app.get('port'));
});

