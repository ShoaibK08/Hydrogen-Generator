import React from "react";
import logo from '../../assets/shared/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import './header.css';

function Header() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div class="headerDiv">
            <img src={logo} />
            <h1 >HYDROGEN GENERATOR LEARNING</h1>
            <HomeIcon className="homeIcon" style={{ fontSize: 40 }}
                onClick={handleClick}
            />

        </div>
    )
}
export default Header;