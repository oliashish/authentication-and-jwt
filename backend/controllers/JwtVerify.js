const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    // verify access with token and req header

    const token = req.header("auth-token");

    if (!token) res.send("Access Denied").status(401);

    // verified users are assigned to access private routes
    try {
        const verified = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return error.message;
    }
};
