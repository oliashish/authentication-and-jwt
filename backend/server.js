const express = require("express");
const route = require("./routes/routes");
const db = require("./models/database");

const app = new express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", route);

app.listen(PORT, () => {
    console.log("listening to : ");
});
