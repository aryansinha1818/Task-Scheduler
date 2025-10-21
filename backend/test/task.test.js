const request = require("supertest");
const app = require("../server");

describe("Task API", () => {
  it("should return tasks list", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("tasks");
  });
});
