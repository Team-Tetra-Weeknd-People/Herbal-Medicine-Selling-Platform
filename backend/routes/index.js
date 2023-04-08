import express from "express";

import itemRouter from "./routers/item.js";
import buyerRouter from "./routers/buyer.js";
import sellerRouter from "./routers/seller.js";

function routers(app){
    app.use("/items", itemRouter);
    app.use("/buyers", buyerRouter);
    app.use("/sellers", sellerRouter);
}

export default routers;