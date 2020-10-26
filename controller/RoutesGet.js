//Rotas get
var movieFoundTitle=[];
var movieFoundVote=[];
var movieFoundId=[];
var movieFoundOverview=[];
var movieFound=[];

app.get('/', function(req, res){
	moviedb.movieTopRated({language:'pt'}).then(resp => {
		for (var i = 0;	 i < 10; i++) {
			movieFoundTitle[i] = String(resp.results[i].title)
			movieFoundVote[i] = String(resp.results[i].vote_average)
			movieFoundId[i] = resp.results[i].id
			movieFoundOverview[i] = resp.results[i].overview
			movieFound[i]=[{
				Title:movieFoundTitle[i], 
				Vote:movieFoundVote[i],
				Id:movieFoundId[i],
				Overview:movieFoundOverview[i]
			}]
		}
		res.render("index",{movieFoundTitle,movieFoundVote,movieFoundId,movieFoundOverview,movieFound})
	}).catch(function(erro){
		res.send("Não foi possível encontrar seu filme, erro: " + erro)
	})
	
})

app.get("/Favoritos", function(req, res){
	movieFav.findAll({order: [["title", "ASC"]]}).then(function(movieFav){
		res.render("favorites", {movieFav: movieFav})
	})
})