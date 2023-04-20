import express from "express";
import { getCarts , createCart , updateCart , deleteCart , getOneCart , getCartsByBuyerID} from "../../controllers/cart.js"

const router = express.Router();

router.get("/" , getCarts);
router.get("/:id" , getOneCart)
router.post("/create" , createCart)
router.put("/update/:id", updateCart);
router.delete("/delete/:id", deleteCart);
router.get("/buyer/:id" , getCartsByBuyerID);
 
export default router;