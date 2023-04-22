import mongoose from "mongoose";

import Cart from "../models/cart.js";

export const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createCart = async (req, res) => {
    const cart = req.body;
    const newCart = new Cart(cart);
    try {
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCart = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        const cart = await Cart.findByIdAndUpdate(id, update);
        res.status(200).json(cart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteCart = async (req, res) => {
    const id = req.params.id;
    try {
        await Cart.findByIdAndRemove(id);
        res.status(200).json({ message: "Cart deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getOneCart = async (req, res) => {
    const id = req.params.id;
    try {
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get carts by buyerID
export const getCartsByBuyerID = async (req, res) => {
    const buyerid = req.params.id;
    try {
        const carts = await Cart.find({ buyerID : buyerid});
        res.status(200).json(carts);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get carts with pending status
export const getCartsByStatus = async (req, res) => {
    const status = req.params.status;
    try {
        const carts = await Cart.find({ status : status});
        res.status(200).json(carts);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

