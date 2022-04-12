import React from 'react';
import './Pages.css';
import Rules from '../DownloadFiles/MechanicalRules.pdf';
import mechanical from '../Images/MECHANICALTF-FINAL.mp4';
import mec from '../Images/3_20220401_151300_0002.png'

function Mechanical() {

    return (
        <div className='cont-mech' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div>
            <img src={mec} alt="none" style={{
                width: "90%"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "20px",
                zIndex: "-1"
            }} >
                <source src={mechanical} type='video/mp4' />
            </video>
        </div>
    );
}

export default Mechanical;