import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png';
import './Navbar.css';

function Navbar() {

    const [isMobile, setIsMobile] = useState(true);


    return (
        <div className="navbar">
            <div className="Logo" >
                <Link to='/' className="Sangam">
                    <img src={logo} height="70" alt='none' />
                </Link>
            </div>
            <ul className={isMobile ? ("nav-link") : ("nav-link-mobile")} onClick={() => setIsMobile(true)} >
                <Link to='/SangamTechFest/it-ce-ai-ds' className="links" >
                    <li className="it">
                        CE/IT/AI&DS/CS
                    </li>
                </Link>
                <Link to='/SangamTechFest/ec-ece-ict' className="links" >
                    <li className="ce">
                        EE/ECE/ICT
                    </li>
                </Link>
                <Link to='/SangamTechFest/mechanical' className="links" >
                    <li className="mechanical">
                        Mechanical & Mechatronics
                    </li>
                </Link>
                <Link to='/SangamTechFest/automobile' className="links" >
                    <li className="automobile">
                        Automobile
                    </li>
                </Link>
                <Link to='/SangamTechFest/civil' className="links" >
                    <li className="civil">
                        Civil
                    </li>
                </Link>
                <Link to='/SangamTechFest/chemical' className="links" >
                    <li className="chemical">
                        Chemical
                    </li>
                </Link>
                <Link to='/SangamTechFest/non-technical' className="links" >
                    <li className="common">
                        Non-Technical
                    </li>
                </Link>
                <Link to='/SangamTechFest/developers' className="links" >
                    <li className="developers">
                        Developers
                    </li>
                </Link>
            </ul>
            <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)} >
                {isMobile ? (<i className="fa-solid fa-bars" />) : (<i className="fa-solid fa-times" />)}
            </button>
        </div>
    );
}
export default Navbar;