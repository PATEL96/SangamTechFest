import React from 'react';
import './Pages.css';
import Rules from '../DownloadFiles/EERules.pdf';
import elec from '../Images/ELECTRICALTF-FINAL.mp4';
import ee from '../Images/WhatsApp Image 2022-04-09 at 11.52.16 AM.jpeg';

function EcEceIct() {

    return (
        <div className='cont-ece' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div>
            <img src={ee} alt="none" style={{
                width: "90%"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "20px",
                zIndex: "-1"
            }} >
                <source src={elec} type='video/mp4' />
            </video>
        </div>
    );
}

export default EcEceIct;