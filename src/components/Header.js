import React from 'react';
import logo from '../assets/images/wazuh_logo.svg';
import {Link} from "react-router-dom";


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
                        <li className="nav-item">
                            <Link className="nav-link" to={'/alerts'}>Alerts<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/agents'}>Agents</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/rules'}>Rules</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;

