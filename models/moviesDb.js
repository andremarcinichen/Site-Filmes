const db = require("./db")

global.movieFav = db.sequelize.define("movieFav", {
	movieId: {
		type: db.Sequelize.STRING
	},
	movieTitle: {
		type: db.Sequelize.STRING
	},
	movieFavorite: {
		type: db.Sequelize.STRING
	}
})
module.exports = movieFav
if(movieFav == 'undefined')
{
movieFav.sync({force: true})
}
