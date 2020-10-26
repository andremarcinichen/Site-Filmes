//rotas post
global.movieFind = []
app.post("/searchtitle", function(req, res){
	global.movieSearchFoundTitle =[]
	movieFind={
		query: req.body.movieFindtitle,
		language: 'pt'
	}
	moviedb.searchMovie(movieFind).then(resp => {
		var y = Object.size(resp.results)
		for (i =0; i<y ; i++) {
		movieSearchFoundTitle[i] = String(resp.results[i].title)
		}
		res.render("Search",{movieSearchFoundTitle:movieSearchFoundTitle})
		return movieSearchFoundTitle
	}).catch(function(erro){
		res.render("MovieNotFound")
		console.log(erro)
	})
})

app.post("/", function(req, res){
	movieFav.movieFavorite=movieFound.movieFavorite
	movieFav.create({
		movieId: req.body.movieId,
		movieTitle: req.body.movieTitle,
		movieFavorite:req.body.movieFavorite
	}).then(function(){
		app.render("/")
	}).catch(function(erro){
		res.send(erro)
	})
})
