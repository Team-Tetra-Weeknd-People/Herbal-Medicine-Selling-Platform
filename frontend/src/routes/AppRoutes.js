import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home,
    AdminProfile,
    BuyerProfile,
    SellerProfile
} from '../pages'

import {
    Brands,
    Items,
    Orders
}from '../pages/AdminProfile/Pages'

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminProfile" element={<AdminProfile />} />
                    <Route path="/buyerProfile" element={<BuyerProfile />} />
                    <Route path="/sellerProfile" element={<SellerProfile />} />

                    {/* Admin Routes  */}
                    <Route path="/adminProfile/brands" element={<Brands />} />
                    <Route path="/adminProfile/items" element={<Items />} />
                    <Route path="/adminProfile/orders" element={<Orders />} />
                </Routes>
            </Router>
        </>
    )
}
