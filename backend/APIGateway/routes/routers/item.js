import express from "express";
import { getItems, createItem, updateItem, deleteItem, getOneItem, getNewItems, getNewItemsBySeller, getItemsBySeller, getItemsByCategory } from "../../controllers/item.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getOneItem);
router.post("/create", createItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);
router.get("/new/items", getNewItems);
router.get("/new/:seller", getNewItemsBySeller);
router.get("/seller/:seller", getItemsBySeller);
router.get("/category/:category", getItemsByCategory);

export default router;