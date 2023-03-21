import mongoose from "mongoose";
import Item from "../models/items.js";

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
    const items = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No item with id: ${id}`)
    };

    try{
        const item = await Item.findByIdAndUpdate(id , items);
        res.status(200).json(item);
    }catch(error){
        res.status(409).json({ message: error.message });
    }
}

export const deleteItem = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No item with id: ${id}`)
    };

    try{
        await Item.findByIdAndRemove(id);
        res.status(200).json({ message: "Item deleted successfully." });
    }catch(error){
        res.status(409).json({ message: error.message });
    }
}

export const getOneItem = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No item with id: ${id}`)
    };

    try{
        const item = await Item.findById(id);
        res.status(200).json(item);

    }catch(error){
        res.status(409).json({ message: error.message });
    }
}