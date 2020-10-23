//Rotas get
var movieFoundTitle=[];
var movieFoundvote=[];

app.get('/', function(req, res){
	moviedb.movieTopRated({language:'pt'}).then(resp => {
		for (var i = 0; i < 10; i++) {
			movieFoundTitle[i] = String(resp.results[i].title)
			movieFoundvote[i] = String(resp.results[i].vote_average)
		}
		res.render("index",{movieFoundTitle,movieFoundvote})
		return movieFoundTitle,movieFoundvote
	}).catch(function(erro){
		res.send("Não foi possível encontrar seu filme, erro: " + erro)
	})
	
})