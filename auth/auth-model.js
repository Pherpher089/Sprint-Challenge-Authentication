const db = require("../database/dbConfig.js");

module.exports = {
	register,
	findUser,
};

function register(creds) {
	return db("users").insert(creds);
}

function findUser(username) {
	return db("users").where({ username });
}
