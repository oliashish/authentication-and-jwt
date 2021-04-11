const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    // verify access with token and req header

    const token = req.header("auth-token");

    if (!token) res.status(401).send("Access Denied");

    // verified users are assigned to access private routes
    try {
        const verified = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return error.message;
    }
};
