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