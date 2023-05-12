const cors = require("cors");
const express = require("express");
const path = require("path");

const logger = require("morgan");
const app = express();

require("dotenv").config();
require("./config/database");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));


// ---------------------API Routes Below -------------------
app.use("/api/trips", require("./routes/api/trips"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/camps", require("./routes/api/camps"));
app.use(require("./config/auth"));



// -------------------- ALL CODE ABOVE ---------------------
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});

