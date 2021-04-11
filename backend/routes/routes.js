const route = require("express").Router();
const UserController = require("../controllers/Users");
const verify = require("../controllers/JwtVerify");

route.post("/signin", async (req, res) => {
    const data = req.body;
    const result = await UserController.SignIn(data);

    res.header("auth-token", result).send(result);
});

route.post("/signup", async (req, res) => {
    const data = req.body;
    const result = await UserController.SignUp(data);

    res.send(result);
});

route.get("/posts", verify, (req, res) => {
    const posts = UserController.GetAllPosts();
    res.send(posts);
});

module.exports = route;
