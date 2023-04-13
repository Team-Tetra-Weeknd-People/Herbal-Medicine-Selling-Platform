import axios from "axios";
import * as url from "./url";

export const register = async (data) => {
    return await axios.post(url.REGISTER_ADMIN, data, {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

const login = async (data) => {
    return await axios.post(url.LOGIN_ADMIN, data, {
        headers: {
            "Content-Type": "application/json"
        },
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login
}