import Buyer from "../models/buyer.js";


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

export const loginBuyer = async (req, res) => {
    const { email, password } = req.body;

    try {

        const buyer = await Buyer.findOne({ email });

        if (!buyer) {
            return res.status(404).json({ message: "Buyer doesn't exist" });
        }
        if (password != buyer.password) {
            return res.status(404).json({ message: "invalid credentials" });
        }
        // if(buyer){
        //     req.session.user=user;
        //     req.session.authorized=true;

        return res.status(200).json(buyer);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getBuyerInfo = async (req, res) => {
    const username = req.params.username;
    try {
        const buyer = await Buyer.findOne({ username });
        if (!buyer) {
            return res.status(404).json({ message: "Buyer doesn't exist" });
        }
        res.status(200).json(buyer);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}