import buyerRouter from "./routers/buyer.js";
import sellerRouter from "./routers/seller.js";

function routers(app) {
    app.use("/buyers", buyerRouter);
    app.use("/sellers", sellerRouter);
}

export default routers;