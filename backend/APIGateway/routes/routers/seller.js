import express from "express";

import { getAllSellers, getSeller, createSeller, updateSeller, deleteSeller, authSeller } from "../../controllers/seller.js";

const router = express.Router();

router.get("/", getAllSellers);
router.post("/create", createSeller);
router.put("/update/:id", updateSeller);
router.delete("/delete/:id", deleteSeller);
router.post("/login", authSeller);
router.get("/:id", getSeller);

export default router;