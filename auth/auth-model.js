const db = require("../database/dbConfig.js");

module.exports = {
	register,
	findUser,
};

async function register(creds) {
	const [id] = await db("users").insert(creds, "id");
	return db("users").where({ id });
}

function findUser(username) {
	return db("users").where({ username });
}
