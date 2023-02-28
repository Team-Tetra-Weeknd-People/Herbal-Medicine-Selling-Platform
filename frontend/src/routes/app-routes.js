import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    NavBar
} from '../components'

import {
    Home
} from '../pages'

export default function App() {
    return (
        <>
            <Router>
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                    </Routes> 
            </Router>
        </>

        // <div><Home/></div>
    )
}
