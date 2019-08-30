const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = require("./auth-model.js");

router.post("/register", async (req, res) => {
	const user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);

	user.password = hash;

	try {
		const saved = await db.register(user);
		res.status(201).json(saved);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

router.post("/login", async (req, res) => {
	const passGuess = req.body.password;
	try {
		const [user] = await db.findUser(req.body.username);
		if (user && bcrypt.compareSync(passGuess, user.password)) {
			const token = generateToken(user);
			res.status(200).json({
				message: `Welcome ${user.username}!`,
				token,
			});
		} else {
			res.status(401).json({ message: "invalid credentials" });
		}
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

module.exports = router;
