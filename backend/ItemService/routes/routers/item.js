import express from "express";
import { getItems, createItem, updateItem, deleteItem, getOneItem, getNewItems, getItemsBySellerID } from "../../controllers/item.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getOneItem);
router.post("/create", createItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);
router.get("/newselleritems/:sellerID", getNewItems);
router.get("/selleritems/:sellerID", getItemsBySellerID);

export default router;