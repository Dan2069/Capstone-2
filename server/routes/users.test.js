const { describe, default: test } = require("node:test");
const request = require("supertest");
const app = require("../index.js");

describe("GET /api/users", function () {
    test("Gets a lists of users", async function () {
        const resp = await request(app)
        .get("/user");
        expect(resp.body).toEqual({
            users: [{
                email: "danielmosqueda15@gmail.com",
                user_name: "Daniel"
            }
            ]
        })
    })
})