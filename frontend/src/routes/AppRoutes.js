import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home,
    BuyerProfile,
} from '../pages'

import {
    Brands,
    Items,
    Orders,
    Home as AdminHome
} from '../pages/AdminProfile/Pages'

import {
    Home as SellerHome,
    ItemView,
    ItemSearch
} from '../pages/SellerProfile/Pages'

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Buyer Routes  */}
                    <Route path="/buyerProfile" element={<BuyerProfile />} />

                    {/* Admin Routes  */}
                    <Route path="/adminProfile" element={<AdminHome />} />
                    <Route path="/adminProfile/brands" element={<Brands />} />
                    <Route path="/adminProfile/items" element={<Items />} />
                    <Route path="/adminProfile/orders" element={<Orders />} />

                    {/* Seller Routes */}
                    <Route path="/sellerProfile" element={<SellerHome />} />
                    <Route path="/sellerProfile/items" element={<ItemView />} />
                    <Route path="/sellerProfile/items/:param" element={<ItemSearch />} />

                </Routes>
            </Router>
        </>
    )
}
