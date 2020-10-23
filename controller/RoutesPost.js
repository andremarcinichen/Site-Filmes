//rotas post
global.movieFind = []
global.movieSearchFoundTitle =[]
var x =[]
app.post("/searchtitle", function(req, res){
	movieFind={
		query: req.body.movieFindtitle,
		language: 'pt'
	}
	moviedb.searchMovie(movieFind).then(resp => {
		for (var i = s0; i <10; i++) {
		movieSearchFoundTitle[i] = String(resp.results[i].title)
		}
		res.render("Search",{movieSearchFoundTitle:movieSearchFoundTitle})
		return movieSearchFoundTitle
	}).catch(function(erro){
		res.render("MovieNotFound")
		console.log(erro)
	})
})