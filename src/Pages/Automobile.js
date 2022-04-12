import React from 'react';
import './Pages.css';
import Rules from '../DownloadFiles/AutoMobileRules.pdf';
import auto from '../Images/AUTOMOBILETF-FINAL.mp4';
import aut from '../Images/2_20220401_151300_0001.png';

function Automobile() {

    return (
        <div className='cont-auto' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div>
            <img src={aut} alt="none" style={{
                width: "90%"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "20px",
                zIndex: "-1"
            }} >
                <source src={auto} type='video/mp4' />
            </video>
        </div>
    );
}

export default Automobile;