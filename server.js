const express = require("express");
const connect = require("./config/db");
const connectDb = require("./config/db");

const app = express();

connectDb();

app.get("/", (req, res) => res.send("Api running"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));