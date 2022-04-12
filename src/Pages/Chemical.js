import React from 'react';
import './Pages.css';
import Rules from '../DownloadFiles/ChemicalRules.pdf';
import chemical from '../Images/CHEMICALTF-FINAL.mp4';
import che from '../Images/4_20220401_151300_0003.png';

function Chemical() {

    return (
        <div className='cont-chem' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div>
            <img src={che} alt="none" style={{
                width: "90%"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "20px",
                zIndex: "-1"
            }} >
                <source src={chemical} type='video/mp4' />
            </video>
        </div>
    );
}

export default Chemical;