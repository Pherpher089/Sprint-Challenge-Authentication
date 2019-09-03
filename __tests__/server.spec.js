const request = require("supertest");
const server = require("../api/server.js");

//Basic test to make sure were testing correctly
describe("GET /", () => {
	it("should return 200", async () => {
		const res = await request(server).get("/");
		expect(res.status).toBe(200);
	});
});
