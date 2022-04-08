import React from 'react';
import './Pages.css';
import dreamcar from '../Images/Sangam Events/DreamCarNew.png';
import quiz from '../Images/Sangam Events/QuizNew.png';
import autocad from '../Images/Sangam Events/AutoCadNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png'
import { FormLink } from './Forms';
import Rules from '../DownloadFiles/AutoMobileRules.pdf';

function Automobile() {

    return (
        <div className='cont-auto' >
            <div className='pair-1'>
                <div className='dream-car'>
                    <div className='data'>
                        <img src={dreamcar} alt='none' className='event-img' />
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
                <div className='quiz'>
                    <div className='data'>
                        <img src={quiz} alt='none' className='event-img' />
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
                <div className='auto-cad'>
                    <div className='data'>
                        <img src={autocad} alt='none' className='event-img' />
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

export default Automobile;