
/**
* Module dependencies.
*/

var	 express = require('express')
	,http = require('http')
	,engine = require('./node_modules/ejs-locals')
	,path = require('path');

var app = express();

app.engine('ejs', engine);

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', function(req, res){
 	res.render('index', { title: "AngularJS Demo" });
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
