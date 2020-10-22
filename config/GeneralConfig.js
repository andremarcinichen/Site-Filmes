global.handlebars = require("express-handlebars")
global.bodyParser = require("body-parser")
global.MovieDB = require('moviedb')('2ad68eb33d65b9eb718d5ca88fbb7b45');
var RoutesGet = require("../controller/RoutesGet")
var RoutesPost = require("../controller/RoutesPost")


//template engine
// app.set("view engine", "handlebars")
// app.engine( 'handlebars', handlebars( {
//   extname: 'handlebars',
//   defaultView: 'home',
//   layoutsDir: __dirname + '/views/site/layout/',
//   partialsDir: __dirname + '/views/site/'
// }));

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(8081, function(){
	console.log("Servidor está rodando na url localhost:8081")
})