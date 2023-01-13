const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const route = require("./routes/route");
const app = express();

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://Tapaswee2001Samantaray:jecky2001@cluster0.zinufff.mongodb.net/group14Database",
    { useNewUrlParser: true }
)
    .then(() => console.log("DB is connected."))
    .catch((err) => console.log(err));

app.use("/", route);

app.listen(3001, function () {
    console.log("Express app is running on port " + 3001);
});