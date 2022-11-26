const { describe, default: test } = require("node:test");
const request = require("supertest");

const app = require("../app");

// Tests whether a movie was created in the favorited page
describe("POST /api/favorite", function() {
    test("Creates a new favorited movie", async function() {
        const resp = await request(app)
        .post(`/api/favorite`)
        .send({
            movieTitle: "Black Panther: Wakanda Forever"
        });
        expect(resp.statusCode).toBe(201);
        expect(resp.body).toEqual({
            _id: "6373251a85b5761a61a74553",
            userFrom: "6373251a85b5761a61a74553",
            movieId: "505642",
            movieTitle: "Black Panther: Wakanda Forever",
            mvoieImage: "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
            movieRunTime: "162"
        });

        });
    });

// Tests to get a list of favorites

describe("GET /api/favorite", function () {
    test("Gets a list of favorited movies", async function (){
        const resp = await request(app)
        .get(`/api/favorite`);
        expect(resp.statusCode).toBe(200);
    });

    test("favorites not found", async function () {
        const resp = await request(app).get(`/api/favorite/0`);
        expect(resp.statusCode).toEqual(404)
    });
})