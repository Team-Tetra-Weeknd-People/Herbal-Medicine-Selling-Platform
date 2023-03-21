import Seller from "../models/seller.js";


export const getAllSellers = async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.status(200).json(sellers);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getSeller = async (req, res) => {
    const id = req.params.id;
    try {
        const seller = await Seller.findById(id);
        res.status(200).json(seller);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createSeller = async (req, res) => {
    const seller = req.body;
    const newSeller = new Seller(seller);
    try {
        await newSeller.save();
        res.status(201).json(newSeller);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const updateSeller = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Seller.findByIdAndUpdate(id, update);
        res.status(200).send({ status: "Seller details updated" });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteSeller = async (req, res) => {
    const id = req.params.id;
    try {
        await Seller.findByIdAndDelete(id);
        res.status(200).send({ status: "Seller details deleted" });
    } catch {
        res.status(404).json({ message: error });
    }
}

export const loginSeller = async (req, res) => {
    const { email, password } = req.body;

    try {

        const seller = await Seller.findOne({ email });

        if (!seller) {
            return res.status(404).json({ message: "Seller doesn't exist" });
        }
        if (password != seller.password) {
            return res.status(404).json({ message: "invalid credentials" });
        }
        // if(seller){
        //     req.session.user=user;
        //     req.session.authorized=true;

        return res.status(200).json(seller);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getSellerInfo = async (req, res) => {
    const username = req.params.username;
    try {
        const seller = await Seller.findOne({ username });
        if (!seller) {
            return res.status(404).json({ message: "Seller doesn't exist" });
        }
        res.status(200).json(seller);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}