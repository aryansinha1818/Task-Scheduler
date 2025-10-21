const request = require("supertest");
const app = require("../server"); // your main Express file

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Aryan", email: "aryan@example.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty("name", "Aryan");
  });
});
