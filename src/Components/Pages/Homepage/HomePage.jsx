import React from "react";
import pixelcutImage from './pixelcut-export.png';
import './HomePage.css';
import SendIcon from '@mui/icons-material/Send';
import "react-awesome-button/dist/styles.css";
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/index-page');
    };
    return (
        <div id="app">
            <img src={pixelcutImage} alt="Hydrogen Simtel Learning" />
            <h2 id="sim-title">HYDROGEN SIMTEL LEARNING</h2>
            <button
                className="btn btn-outline-info btn-lg absolute-button"
                onClick={handleClick}
            >
                Enter
            </button>

        </div>
    );
}

export default HomePage;
