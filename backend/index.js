const express = require("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv/config");
const session = require ("express-session");

const app = express();
const PORT = process.env.REACT_APP_BACKEND_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: 'beheth_kade',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: 'none',
        secure: true
    }
}));

const URL = process.env.REACT_APP_MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});