import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WarningPopup.css';

const WarningPopup = ({ onReset, onCancel }) => {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center warning-popup-overlay">
      <div className="bg-white rounded-4 position-relative warning-popup-container">
        <div className="warning-popup-top-line" />
        
        <div className="p-4 d-flex flex-column align-items-center border border-dark rounded-bottom" >
          <div className="d-flex justify-content-end w-100 mb-3">
            <button 
              className="btn border-0 p-0"
              onClick={onCancel}
            >
              ✕
            </button>
          </div>

          <div className="position-relative mb-4">
            <svg width="169" height="149" viewBox="0 0 169 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.4067 5.75001C79.4482 -1.24999 89.5518 -1.25 93.5933 5.75L166.772 132.5C170.814 139.5 165.762 148.25 157.679 148.25H11.3209C3.23796 148.25 -1.81386 139.5 2.22759 132.5L75.4067 5.75001Z" 
                    fill="#F77979" 
                    stroke="#E83434"/>
            </svg>
            
            <div className="position-absolute exclamation-mark-container">
              <svg width="16" height="71" viewBox="0 0 16 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4432 0.181816L13.3182 49.4773H2.34091L1.25 0.181816H14.4432ZM7.82955 70.75C5.76136 70.75 3.98864 70.0227 2.51136 68.5682C1.05682 67.1136 0.329546 65.3409 0.329546 63.25C0.329546 61.2045 1.05682 59.4545 2.51136 58C3.98864 56.5455 5.76136 55.8182 7.82955 55.8182C9.85227 55.8182 11.6023 56.5455 13.0795 58C14.5795 59.4545 15.3295 61.2045 15.3295 63.25C15.3295 64.6364 14.9773 65.8977 14.2727 67.0341C13.5909 68.1705 12.6818 69.0795 11.5455 69.7614C10.4318 70.4205 9.19318 70.75 7.82955 70.75Z" 
                      fill="white"/>
              </svg>
            </div>
          </div>

          <h2 className="warning-title">Warning</h2>
          <p className="warning-message mb-4">Water is empty</p>
          <p className="warning-message mb-4">Would you like to reset the simulation?</p>

          <div className="d-flex gap-3 mb-3">
            <button 
              className="btn px-4 cancel-button"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button 
              className="btn px-4 text-white reset-button"
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningPopup;