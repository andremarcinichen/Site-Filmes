global.handlebars = require("express-handlebars")
global.Handlebars = require("handlebars")
global.bodyParser = require("body-parser")
const { MovieDb } = require('moviedb-promise')
global.moviedb = new MovieDb('2ad68eb33d65b9eb718d5ca88fbb7b45')

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")
require('./handlebarsclass')

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var RoutesGet = require("../controller/RoutesGet")
var RoutesPost = require("../controller/RoutesPost")

app.listen(8081, function(){
	console.log("Servidor está rodando na url localhost:8081")
})


