import cartRouter from "./routers/cart.js"
import cartItemRouter from "./routers/cartItem.js"

function routers(app) {
    app.use("/carts", cartRouter)
    app.use("/cartItems", cartItemRouter)
}

export default routers;