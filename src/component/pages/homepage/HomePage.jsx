import React from "react";
import pixelcutImage from './pixelcut-export.png';
import './homepage.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
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
            <Button
                className="absolute-button"
                variant="outlined"
                startIcon={<SendIcon fontSize="small" />}
                size="medium"
                onClick={handleClick}
            >
                Enter
            </Button>
        </div>
    );
}

export default HomePage;
