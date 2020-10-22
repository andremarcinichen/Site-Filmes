const db = require("./db")

global.userinfo = db.sequelize.define("userinfo", {
	firstname: {
		type: db.Sequelize.STRING
	},
	lastname: {
		type: db.Sequelize.STRING
	}
})
// userinfo.sync({force: true})
module.exports = userinfo
