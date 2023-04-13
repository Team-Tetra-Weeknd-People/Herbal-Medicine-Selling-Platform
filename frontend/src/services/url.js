const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

//seller
export const REGISTER_SELLER = `${BASE_URL}sellers/create`;
export const LOGIN_SELLER = `${BASE_URL}sellers/login`;

//buyer
export const REGISTER_BUYER = `${BASE_URL}buyers/create`;
export const LOGIN_BUYER = `${BASE_URL}buyers/login`;

//admin
export const REGISTER_ADMIN = `${BASE_URL}admins/create`;
export const LOGIN_ADMIN = `${BASE_URL}admins/login`;

