import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Home
} from '../pages'

export default function App() {
    return (
        <>
        <Router>
        	<Routes>
       			<Route path="/" >
        		<Route index element={<Home />} />
        		</Route>
        	</Routes>
        </Router>
        </>
        )
    }
    