


describe("findAll", function () {
    test("works", async function () {
      const users = await User.findAll();
      expect(users).toEqual([
        {
          username: "Dan2069",
          firstName: "Daniel",
          lastName: "Mosqueda",
          email: "danielmosqueda15@gmail.com",
          isAdmin: false,
        }
      ]);
    });
  });