import Buyer from "../models/buyer.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

//authenticating the buyer
export const authBuyer = async (req, res) => {
    const { email, password } = req.body;
    try {
        const buyer = await Buyer.findOne({ email });
        if (buyer) {
            if (bcrypt.compareSync(password, buyer.password)) {
                const secret = process.env.JWT_SECRET;

                const token = jwt.sign({ id: buyer._id, verified: buyer.verified, fname: buyer.firstName, lname: buyer.lastName, email: buyer.email, contactNo: buyer.contactNo }, secret, {
                    expiresIn: "3h",
                });

                return res.status(200).json({ success: true, user: "Buyer", message: "Buyer authenticated", token: token });
            }
            return res.status(406).json({ success: false, user: true, message: "Password Incorrect" });
        }
        else {
            return res.status(402).json({ success: false, user: false, message: "Buyer doesn't exist" });
        }
    }
    catch (error) {
        return res.status(404).json({ message: error });
    }
}

export const getAllBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find();
        res.status(200).json(buyers);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getBuyer = async (req, res) => {
    const id = req.params.id;
    try {
        const buyer = await Buyer.findById(id);
        res.status(200).json(buyer);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createBuyer = async (req, res) => {
    const buyer = req.body;
    const newBuyer = new Buyer(buyer);
    try {
        await newBuyer.save();
        res.status(201).json(newBuyer);
    } catch (error) {
        res.status(404).json({ message: error });
    }

    const id = newBuyer._id;

    const url = `http://localhost:3000/verify/${id}`;

    await transporter.sendMail({
        from: process.env.EMAIL,
        to: newBuyer.email,
        subject: "Verify your email",
        html: `Please click this email to <a href="${url}">verify</a>`,
    });
}

export const updateBuyer = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Buyer.findByIdAndUpdate(id, update);
        res.status(200).send({ status: "Buyer details updated" });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteBuyer = async (req, res) => {
    const id = req.params.id;
    try {
        await Buyer.findByIdAndDelete(id);
        res.status(200).send({ status: "Buyer details deleted" });
    } catch {
        res.status(404).json({ message: error });
    }
}

export const verifyBuyer = async (req, res) => {
    try {
        const id = req.params.id;
        await Buyer.findByIdAndUpdate(id, { verified: true });
        res.status(200).send({ status: "Buyer verified" });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}