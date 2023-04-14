import mongoose from "mongoose";
import Brand from "../models/brand.js";

export const getBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createBrand = async (req, res) => {
    const brand = req.body;
    const newBrand = new Brand(brand);
    try {
        await newBrand.save();
        res.status(201).json(newBrand);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBrand = async (req, res) => {
    const id = req.params.id;
    const brands = req.body;
    try {
        const brand = await Brand.findByIdAndUpdate(id, brands);
        res.status(200).json(brand);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteBrand = async (req, res) => {
    const id = req.params.id;
    try {
        await Brand.findByIdAndRemove(id);
        res.status(200).json({ message: "Brand deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getOneBrand = async (req, res) => {
    const id = req.params.id;
    try {
        const brand = await Brand.findById(id);
        res.status(200).json(brand);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

