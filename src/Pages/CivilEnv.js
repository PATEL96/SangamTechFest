import React from 'react';
import './Pages.css';
import qrCode from '../Images/Sangam Events/qrCode.png';
import bridgeBreakup from '../Images/Sangam Events/BridgeBreakupNew.png';
import aquaArena from '../Images/Sangam Events/AquaArenaNew.png';
import bobTheBuilder from '../Images/Sangam Events/BobTheBuilderNew.png';
import homesweethome from '../Images/Sangam Events/HomeSweetHomeNew.png'
import { FormLink } from './Forms';
import Rules from '../DownloadFiles/CivilRules.pdf';

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
            </div>
            <div className='pair-1'>
                <div className='bridge-breakup'>
                    <div className='data'>
                        <img src={bridgeBreakup} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='bob-the-builder'>
                    <div className='data'>
                        <img src={bobTheBuilder} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='home-sweet-home'>
                    <div className='data'>
                        <img src={homesweethome} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='aqua-arena'>
                    <div className='data'>
                        <img src={aquaArena} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default CivilEnv;