import React from 'react';
import logo from '../assets/images/wazuh_logo.svg'; // Tell webpack this JS file uses this image


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="https://wazuh.com/">
                    <img src={logo} width="100" height="30"
                         className="d-inline-block align-top" alt="Logo"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Alerts<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Agents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;

