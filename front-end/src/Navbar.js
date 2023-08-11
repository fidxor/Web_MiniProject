// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import './Navbar.css';
function Navbar(){
    return(
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                    <Link className='navbar-brand' to="/">Home</Link>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link active' aria-current = 'page' to = '/board'>Board</Link>
                            </li>
                        </ul>
            </div>
            </nav>
        
        
        
        
        </>
    )
}
export default Navbar;





