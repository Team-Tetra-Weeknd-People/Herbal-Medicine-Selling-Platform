import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home,
    AdminProfile,
    BuyerProfile,
    SellerProfile
} from '../pages'

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminProfile" element={<AdminProfile />} />
                    <Route path="/buyerProfile" element={<BuyerProfile />} />
                    <Route path="/sellerProfile" element={<SellerProfile />} />
                </Routes>
            </Router>
        </>
    )
}
