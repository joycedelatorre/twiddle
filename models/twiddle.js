//Dependencies
//Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
//sequelize (lowercase) references our connection to db
var sequelize = require("../app/config/connection.js");

var Twiddle = sequelize.define("chirp",{
	author:{
		type: Sequelize.STRING
	},
	body:{
		type: Sequelize.STRING
	},
	create_at:{
		type: Sequelize.DATE
	},{
	timestamps: false
});

//Syncs with DB
Twiddle.sync();

//Makes the Chirp Model available for other files (will also create )
module.exports = Twiddle;