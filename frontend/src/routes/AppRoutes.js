import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home,
    BuyerProfile,
    ForgotPassword,
    UpdatePassword,
    BuyerVerifyEmail,
    SellerVerifyEmail,
    ContactUs,
    AboutUs,
    ItemOne,
    StripeContainer
} from '../pages'

import {
    footer,
} from '../components'

import {
    Items,
    Home as AdminHome
} from '../pages/AdminProfile/Pages'

import {
    Home as SellerHome,
    ItemView,
    ItemSearch
} from '../pages/SellerProfile/Pages'

import {
    Brands,
    BrandItems
} from '../pages/Brand'

import {
    Categories,
    CategoryItems
} from '../pages/Category'

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

                    {/* Seller Routes */}
                    <Route path="/sellerProfile" element={<SellerHome />} />
                    <Route path="/sellerProfile/items" element={<ItemView />} />
                    <Route path="/sellerProfile/items/:param" element={<ItemSearch />} />

                    {/* Verify Buyer Route */}
                    <Route path="/verify/:id" element={<BuyerVerifyEmail />} />

                    {/* Verify Seller Route */}
                    <Route path="/verifySeller/:id" element={<SellerVerifyEmail />} />

                    {/* ContactUs Routes */}
                    <Route path="/ContactUS" element={<ContactUs />} />

                    {/* AboutUs Routes */}
                    <Route path="/AboutUs" element={<AboutUs />} />

                    {/* Brand Routes */}
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/brands/:param" element={<BrandItems />} />

                    {/* Category Routes */}
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/:param" element={<CategoryItems />} />

                    {/* Item Routes */}
                    <Route path="/itemOne/:param" element={<ItemOne />} />

                    {/* Payment Routes */}
                    <Route path="/payment" element={<StripeContainer />} />

                </Routes>
                <footer />
            </Router>
        </>
    )
}
