import buyerRouter from "./routers/buyer.js";
import sellerRouter from "./routers/seller.js";
import itemRouter from "./routers/item.js";
import adminRouter from "./routers/admin.js";
import categoryRouter from "./routers/category.js"
import brandRouter from "./routers/brand.js"

function routers(app) {
    app.use("/admins", adminRouter);
    app.use("/buyers", buyerRouter);
    app.use("/sellers", sellerRouter);
    app.use("/items", itemRouter);
    app.use("/categories", categoryRouter)
    app.use("/brands", brandRouter)
}

export default routers;