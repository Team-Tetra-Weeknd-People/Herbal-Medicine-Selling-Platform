import express from "express";
import { getBrands, createBrand, updateBrand, deleteBrand, getOneBrand } from "../../controllers/brand.js";

const router = express.Router();

router.get("/", getBrands);
router.get("/:id", getOneBrand);
router.post("/create", createBrand);
router.put("/update/:id", updateBrand);
router.delete("/delete/:id", deleteBrand);

export default router;