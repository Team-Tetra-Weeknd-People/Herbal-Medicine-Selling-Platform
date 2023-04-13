import express from "express";

import itemRouter from "./routers/item.js";
import categoryRouter from "./routers/category.js"

function routers(app) {
    app.use("/items", itemRouter);
    app.use("/categories", categoryRouter);
}

export default routers;