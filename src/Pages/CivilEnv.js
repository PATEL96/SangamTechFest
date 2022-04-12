import React from 'react';
import './Pages.css';
import Rules from '../DownloadFiles/CivilRules.pdf';
import civil from '../Images/CIVILTF-FINAL.mp4';
import civ from '../Images/5_20220401_151300_0004.png';

function CivilEnv() {

    return (
        <div className='cont-civil' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div><img src={civ} alt="none" style={{
                width: "90%"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "20px",
                zIndex: "-1"
            }} >
                <source src={civil} type='video/mp4' />
            </video>
        </div >
    );
}

export default CivilEnv;