const request = require("supertest");
const server = require("../api/server.js");
const users = require("../auth/auth-model.js");
const db = require("../database/dbConfig");

describe("should add a user to the database", () => {
	beforeEach(async () => {
		await db("users").truncate();
	});

	it("should register a user", async () => {
		const res = await request(server)
			.post("/api/auth/register")
			.send({ username: "testUser1", password: "testPass123" });
		expect(res.type).toBe("application/json");
		expect(res.status).toBe(201);
		// const newUser = { username: "testUser1", password: "testPass123" };
		// const [results] = await users.register(newUser);
		// expect(results.username).toBe(newUser.username);

		// const allUsers = await db("users");
		// expect(allUsers).toHaveLength(1);
	});
});

describe("should log a user into the database", () => {
	it("should log a user in", async () => {
		const res = await request(server)
			.post("/api/auth/login")
			.send({ username: "testUser1", password: "testPass123" });
		expect(res.status).toBe(200);
		expect(res.type).toBe("application/json");
	});
});

describe("should log a user into the db", () => {});
