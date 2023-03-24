import express from "express";

import { getAllSellers, getSeller, createSeller, updateSeller, deleteSeller, authSeller, getSellerInfo } from "../../controllers/seller.js";

const router = express.Router();

router.get("/", getAllSellers);
router.get("/getSellerInfo/:username", getSellerInfo);
router.post("/create", createSeller);
router.put("/update/:id", updateSeller);
router.delete("/delete/:id", deleteSeller);
router.post("/login", authSeller);
router.get("/:id", getSeller);

export default router;