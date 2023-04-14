import dotenv from "dotenv/config";
import axios from "axios";

const itemAPI = process.env.REACT_APP_ITEM_SERVICES_URI + "/brands";

export const getOneBrand = async (req, res) => {
    axios.get(`${itemAPI}/${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const getBrands = async (req, res) => {
    axios.get(`${itemAPI}/`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const createBrand = async (req, res) => {
    axios.post(`${itemAPI}/create`, req.body)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const updateBrand = async (req, res) => {
    axios.put(`${itemAPI}/update/${req.params.id}`, req.body)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const deleteBrand = async (req, res) => {
    axios.delete(`${itemAPI}/delete/${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}
