const db = require("./db")

global.movieFav = db.sequelize.define("movieFav", {
	movieId: {
		type: db.Sequelize.STRING
	},
	title: {
		type: db.Sequelize.STRING
	}
})
module.exports = movieFav
if(movieFav == null)
{
movieFav.sync({force: true})
}
