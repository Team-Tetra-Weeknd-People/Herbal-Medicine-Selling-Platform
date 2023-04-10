import buyerRouter from "./routers/buyer.js";
import sellerRouter from "./routers/seller.js";
import itemRouter from "./routers/item.js";

function routers(app) {
    app.use("/buyers", buyerRouter);
    app.use("/sellers", sellerRouter);
    app.use("/items", itemRouter);
}

export default routers;