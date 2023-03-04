import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv/config";

import itemRouter from "./routes/items.js";

const app = express();
const PORT = process.env.REACT_APP_BACKEND_PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use("/items" , itemRouter);

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