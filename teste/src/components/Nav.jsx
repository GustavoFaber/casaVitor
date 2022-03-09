import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="links">
        <nav className="navegacao">
            <Link to="/Pag1">
                <i>Pagina 1</i>
            </Link>
            <Link to="/Pag2">
                <i>Pagina 2</i>
            </Link>
        </nav>
    </aside>