const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require('colors');

// env config
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));  // always apply it above like here cause it was not working there
app.use(express.json());
app.use(require("./router/auth"));

app.get("/", (req, res) => {
    res.send("home");
})

app.listen(port, () => {
    console.log(`server is running at port ${port}` .bgWhite.black);
})