import axios from "axios";
import * as url from "./url";

const getAll = async () => {
    return await axios.get(url.GET_ALL_CARTS, {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

const get = async (id) => {
    return await axios.get(url.GET_CART(id), {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

const create = async (data) => {
    return await axios.post(url.CREATE_CART, data, {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

const update = async (id, data) => {
    return await axios.put(url.UPDATE_CART(id), data, {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

const remove = async (id) => {
    return await axios.delete(url.DELETE_CART(id), {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

const getByBuyerID = async (buyer) => {
    return await axios.get(url.GET_CARTS_BY_BUYERID(buyer), {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

/* eslint-disable import/no-anonymous-default-export */
export default {
    getAll,
    get,
    create,
    update,
    remove,
    getByBuyerID
};

