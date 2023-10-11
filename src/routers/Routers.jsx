import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../pages/home"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/game" element={< Player />} /> */}
            </Routes>
        </BrowserRouter>
    )
}