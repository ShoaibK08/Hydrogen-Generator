import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';

const Theory = () => {
  return (
    <div className='m-4'>
      <div className="d-flex flex-column flex-md-row justify-content-between mt-4 px-4">
        <div style={{backgroundColor:"#009C8A"}} className="rounded p-4 me-md-4 mb-4 mb-md-0 flex-grow-1 col-3"></div>
        <div style={{backgroundColor:"#D9D9D9"}} className="rounded p-2 flex-grow-1 col-9 d-flex justify-content-center" ><h4>Hydrogen Generator Learning</h4></div>
      </div>
      <header className="d-flex align-items-center justify-content-between bg-light text-dark py-3 px-4">
        <div>
          <FontAwesomeIcon icon={faHome} style={{ color: '#009C8A' }} />
        </div>
        <div>
          <h4 className="mb-0">Hydrogen Generation through (PEM) electrolysis</h4>
        </div>
        <div>
          <FontAwesomeIcon icon={faBars} style={{ color: '#009C8A' }} />
        </div>
      </header>

      <div className="d-flex flex-column flex-md-row justify-content-between mt-4 px-4">
        <div style={{backgroundColor:"#D9D9D9",height:"50%"}} className="p-4 me-md-4 mb-4 mb-md-0 flex-grow-1"></div>
        <div style={{backgroundColor:"#D9D9D9"}} className="rounded p-4 flex-grow-1"></div>
      </div>

      <div className="d-flex justify-content-end mt-4 px-4">
        <button className="btn btn-primary shadow px-4" style={{ backgroundColor: '#009C8A' }}>
          Simulation
        </button>
      </div>
    </div>
  );
};

export default Theory;