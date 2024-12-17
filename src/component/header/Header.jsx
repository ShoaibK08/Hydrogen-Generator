import React from "react";
import logo from '../../assets/shared/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import './header.css';

function Header() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="headerDiv">
                <img src={logo} alt="Logo" />
                <h1>HYDROGEN GENERATOR LEARNING</h1>
               
            </div>
            <div class="iconDiv">
            <FontAwesomeIcon
                    icon={faHome}
                    className="homeIcon"
                    onClick={handleClick}
                />
            </div>
           
        </div>

    );
}

export default Header;
