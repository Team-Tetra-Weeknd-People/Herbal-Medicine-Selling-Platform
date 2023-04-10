import express from "express";

import itemRouter from "./routers/item.js";

function routers(app){
    app.use("/items", itemRouter);
}

export default routers;