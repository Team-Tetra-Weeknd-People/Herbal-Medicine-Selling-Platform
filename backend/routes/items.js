import express from "express";
import { getItems, createItem, updateItem, deleteItem, getOneItem } from "../controllers/items.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getOneItem);
router.post("/create", createItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);

export default router;