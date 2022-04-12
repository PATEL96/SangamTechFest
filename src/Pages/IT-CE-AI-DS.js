import React from 'react';
import './Pages.css';
import Rules from '../DownloadFiles/ComputerRules.pdf';
import comp from '../Images/COMPUTERTF-FINAL.mp4';
import it from '../Images/7_20220401_151300_0006.png';

function ItCeAiDs() {

    return (
        <div className='cont-it' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div>
            <img src={it} alt="none" style={{
                width: "90%"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "20px",
                zIndex: "-1"
            }} >
                <source src={comp} type='video/mp4' />
            </video>
        </div>
    );
}

export default ItCeAiDs;