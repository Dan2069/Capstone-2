const { describe, default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const Favorite = require("./Favorite.js");

describe("create", function () {
    let newFavorite = {
        movieId: "12345",
        movieTitle: "Test Title",
        movieRunTime: "300",
        movieImage: "test.jpg"
    }

    test("it_works", async function (){
        let favorite = await Favorite.create(newFavorite);
        expect(Favorite).toEqual({
            ...newFavorite,
            id: expect.any(Number)
        })
    })
})

describe("get", function () {
    test("works", async function () {
        let favorite = await Favorite.get(testFavoriteIds[0]);
        expect(Favorite).toEqual({
            id: testFavoriteIds[0],
            movieId: "12345",
            movieTitle: "Test Title",
            movieRunTime: "300",
            movieImage: "test.jpg"

        })
    })
})