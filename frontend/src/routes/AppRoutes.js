import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home,
    BuyerProfile,
    ForgotPassword,
    UpdatePassword,
    ContactUs,
    AboutUs
} from '../pages'

import {
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
                    
                    {/* Forgot Password Routes  */}
                    <Route path="/UpdatePassword" element={<UpdatePassword />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />

                    {/* Admin Routes  */}
                    <Route path="/adminProfile" element={<AdminHome />} />
                    <Route path="/adminProfile/items" element={<Items />} />
                    <Route path="/adminProfile/orders" element={<Orders />} />

                    {/* Seller Routes */}
                    <Route path="/sellerProfile" element={<SellerHome />} />
                    <Route path="/sellerProfile/items" element={<ItemView />} />
                    <Route path="/sellerProfile/items/:param" element={<ItemSearch />} />

                    {/* ContactUs Routes */}
                    <Route path="/ContactUS" element={<ContactUs />} />

                    {/* AboutUs Routes */}
                    <Route path="/AboutUs" element={<AboutUs />} />

                </Routes>
            </Router>
        </>
    )
}
