import React from 'react';
import './Pages.css';
import electrogets from '../Images/Sangam Events/ElectrogetsNew.png';
import iot from '../Images/Sangam Events/IotNew.png';
import chakravyuh from '../Images/Sangam Events/ChakravyuhNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';

function EcEceIct() {

    return (
        <div className='cont-ece' >
            <div className='pair-1'>
                <div className='electrogets'>
                    <div className='data'>
                        <img src={electrogets} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://forms.gle/xF3y6jhz5JHFMZZw7' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='iot'>
                    <div className='data'>
                        <img src={iot} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://forms.gle/xF3y6jhz5JHFMZZw7' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='chakravyuh'>
                    <div className='data'>
                        <img src={chakravyuh} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://forms.gle/xF3y6jhz5JHFMZZw7' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EcEceIct;