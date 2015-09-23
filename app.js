var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(port);

console.log('Server started on ' + port);

router.get('/', function(req, res) {
	res.send('index');
})

router.get('/contact', function(req, res) {
	res.send('contact');
})

router.get('/about', function(req, res) {
	res.send('about');
})

app.use('/', router);