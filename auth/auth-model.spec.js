const request = require("supertest");
const server = require("../api/server.js");

describe("server.js", () => {
	it("should set the testing environment", () => {
		expect(process.env.DB_ENV).toBe("testing");
	});

	describe("GET /", () => {
		it("should return 200", async () => {
			const res = await request(server).get("/");
			expect(res.status).toBe(200);
		});
	});
});
