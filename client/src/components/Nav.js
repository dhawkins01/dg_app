import React from "react";
import "./style/Nav.css";

function Nav() {
    return (
        <div className ="nav">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/"><img src="/images/dgnav.png" width="150" height="60" class="d-inline-block align-top" alt="logo" /></a>
                
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Course Search</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
          
        

    )
}

export default Nav;