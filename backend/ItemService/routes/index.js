import itemRouter from "./routers/item.js";
import categoryRouter from "./routers/category.js"
import brandRouter from "./routers/brand.js"


function routers(app) {
    app.use("/items", itemRouter);
    app.use("/categories", categoryRouter);
    app.use("/brands", brandRouter);
}

export default routers;