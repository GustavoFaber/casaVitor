import React from "react";
import Nav from "../components/Nav";

import { BrowserRouter } from 'react-router-dom'
import Routes from "./Routes";
import './App.css'

import Footer from "../components/Footer";
import Header from "../components/Header";

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Nav />
            <Footer />
        </div>
    </BrowserRouter>