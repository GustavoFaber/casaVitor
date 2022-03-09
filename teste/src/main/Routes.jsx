import React from "react"
import { Routes, Route } from "react-router-dom"

import Pag2 from "../pags/Pag2"
import Pag1 from "../pags/Pag1"
import App from "./App"


export default props => (
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="Pag1" element={<Pag1 />} />
        <Route path="Pag2" element={<Pag2 />} />

    </Routes>
)