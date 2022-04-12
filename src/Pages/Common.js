import React from 'react';
import './Pages.css';
import nontec from '../Images/NON TECHNICALTF-FINAL.mp4';
import non from '../Images/1_20220401_151300_0000.png';

function Common() {

    return (
        <div className='cont-comm' >
            <img src={non} alt="none" style={{
                width: "90%",
                padding: "30px"
            }} />
            <video autoPlay loop controls muted style={{
                width: "90%",
                padding: "10px",
                zIndex: "-1"
            }} >
                <source src={nontec} type='video/mp4' />
            </video>
        </div>
    );
}

export default Common;