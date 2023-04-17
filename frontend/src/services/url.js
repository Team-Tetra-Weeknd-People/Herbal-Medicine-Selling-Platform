const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

//seller
export const REGISTER_SELLER = `${BASE_URL}/sellers/create`;
export const LOGIN_SELLER = `${BASE_URL}/sellers/login`;
export const GET_SELLER = (id) => `${BASE_URL}/sellers/${id}`;
export const UPDATE_SELLER = (id) => `${BASE_URL}/sellers/update/${id}`;
export const DELETE_SELLER = (id) => `${BASE_URL}/sellers/delete/${id}`;
export const GET_ALL_SELLERS = `${BASE_URL}/sellers`;

//buyer
export const REGISTER_BUYER = `${BASE_URL}/buyers/create`;
export const LOGIN_BUYER = `${BASE_URL}/buyers/login`;
export const GET_BUYER = (id) => `${BASE_URL}/buyers/${id}`;
export const UPDATE_BUYER = (id) => `${BASE_URL}/buyers/update/${id}`;
export const DELETE_BUYER = (id) => `${BASE_URL}/buyers/delete/${id}`;
export const GET_ALL_BUYERS = `${BASE_URL}/buyers`;

//admin
export const REGISTER_ADMIN = `${BASE_URL}/admins/create`;
export const LOGIN_ADMIN = `${BASE_URL}/admins/login`;
export const GET_ADMIN = (id) => `${BASE_URL}/admins/${id}`;
export const UPDATE_ADMIN = (id) => `${BASE_URL}/admins/update/${id}`;
export const DELETE_ADMIN = (id) => `${BASE_URL}/admins/delete/${id}`;
export const GET_ALL_ADMINS = `${BASE_URL}/admins`;

//category
export const GET_ALL_CATEGORIES = `${BASE_URL}/categories`;
export const GET_CATEGORY = (id) => `${BASE_URL}/categories/${id}`;
export const CREATE_CATEGORY = `${BASE_URL}/categories/create`;
export const UPDATE_CATEGORY = (id) => `${BASE_URL}/categories/update/${id}`;
export const DELETE_CATEGORY = (id) => `${BASE_URL}/categories/delete/${id}`;

//item
export const GET_ALL_ITEMS = `${BASE_URL}/items`;
export const GET_ITEM = (id) => `${BASE_URL}/items/${id}`;
export const CREATE_ITEM = `${BASE_URL}/items/create`;
export const UPDATE_ITEM = (id) => `${BASE_URL}/items/update/${id}`;
export const DELETE_ITEM = (id) => `${BASE_URL}/items/delete/${id}`;
export const GET_NEW_ITEMS = `${BASE_URL}/items/new/items`;
export const GET_NEW_ITEMS_BY_SELLER = (seller) => `${BASE_URL}/items/new/${seller}`;
export const GET_ITEMS_BY_SELLER = (seller) => `${BASE_URL}/items/seller/${seller}`;
export const GET_ITEMS_BY_CATEGORY = (category) => `${BASE_URL}/items/category/${category}`;

