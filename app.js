var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var carsRouter = express.Router();
var bodyParser = require('body-parser');

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(port);

console.log('Server started on ' + port);

router.get('/', function(req, res) {
	res.send('index');
});

router.get('/contact', function(req, res) {
	res.send('contact');
});

router.get('/about', function(req, res) {
	res.send('about');
});

carsRouter.get('/', function(req, res) {
	// INDEX
	res.send('This is the index route')
});

carsRouter.get('/:id', function(req, res) { 
	// SHOW 
});

carsRouter.get('/new', function(req, res) { 
	// NEW 
});

carsRouter.post('/', function(req, res) { 
	// CREATE 
});

carsRouter.get('/:id/edit', function(req, res) { 
	// SHOW
});

carsRouter.put('/:id', function(req, res) { 
	// UPDATE 
});

carsRouter.delete('/:id', function(req, res) { 
	// DELETE 
});

app.use("/cars", carsRouter);

app.use('/', router);

app.use(bodyParser.urlencoded({ extended: true }));



