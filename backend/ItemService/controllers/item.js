import mongoose from "mongoose";
import Item from "../models/item.js";

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createItem = async (req, res) => {
    const item = req.body;
    const newItem = new Item(item);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        const item = await Item.findByIdAndUpdate(id, update);
        res.status(200).json(item);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteItem = async (req, res) => {
    const id = req.params.id;
    try {
        await Item.findByIdAndRemove(id);
        res.status(200).json({ message: "Item deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getOneItem = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Item.findById(id);
        res.status(200).json(item);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get new 5 items by sellerID
export const getNewItems = async (req, res) => {
    const sellerID = req.params.sellerID;
    try {
        const items = await Item.find({sellerID : sellerID}).sort({ _id: -1 }).limit(5);
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get all items by sellerID
export const getItemsBySellerID = async (req, res) => {
    const sellerID = req.params.sellerID;
    try {
        const items = await Item.find({sellerID : sellerID});
        res.status(200).json(items);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
} 


