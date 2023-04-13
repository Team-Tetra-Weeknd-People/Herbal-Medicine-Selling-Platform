import express from "express";

import { getAllBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer, authBuyer } from "../../controllers/buyer.js";

const router = express.Router();

router.get("/", getAllBuyers);
router.post("/create", createBuyer);
router.put("/update/:id", updateBuyer);
router.delete("/delete/:id", deleteBuyer);
router.post("/login", authBuyer);
router.get("/:id", getBuyer);

export default router;