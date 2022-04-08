import React from 'react';
import './Pages.css';
import bot from '../Images/Sangam Events/BotingNew.png';
import macing from '../Images/Sangam Events/MacingNew.png';
import roboyudh from '../Images/Sangam Events/RoboYudhNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';
import { FormLink } from './Forms';
import Rules from '../DownloadFiles/MechanicalRules.pdf';

function Mechanical() {

    return (
        <div className='cont-mech' >
            <div className='pair-1'>
                <div className='boting'>
                    <div className='data'>
                        <img src={bot} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <div className="download-option">
                            <a href={Rules} download >
                                <button className='download-button'>
                                    <i className="fas fa-download" />
                                    Rules & Regulations
                                </button>
                            </a>
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='macing'>
                    <div className='data'>
                        <img src={macing} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={Rules} download >
                            <button className='download-button'>
                                <i className="fas fa-download" />
                                Rules & Regulations
                            </button>
                        </a>
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='robo-yudh'>
                    <div className='data'>
                        <img src={roboyudh} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={Rules} download >
                            <button className='download-button'>
                                <i className="fas fa-download" />
                                Rules & Regulations
                            </button>
                        </a>
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mechanical;