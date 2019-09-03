const request = require("supertest");
const server = require("../api/server.js");

describe("should add a user to the database", () => {
	it("should return 200", async () => {
		const res = await request(server).post("/api/auth");
		expect(res.status).toBe(200);
	});

	it("should return a json object", async () => {
		const res = await request(server).post("/api/auth");
		expect(res.type).toBe("application/json");
	});
});

describe("should log a user into the db", () => {
	it("should return 200", async () => {
		const res = await request(server).post("/api/login");
		expect(res.status).toBe(200);
	});

	it("should return a json object", async () => {
		const res = await request(server).post("/api/login");
		expect(res.type).toBe("application/json");
	});
});
