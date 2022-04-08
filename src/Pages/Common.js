import React from 'react';
import './Pages.css';
import quizometer from '../Images/Sangam Events/QuizoMeterNew.png';
import prodesign from '../Images/Sangam Events/ProDesignNew.png';
import vichar from '../Images/Sangam Events/VicharoKaMahayudhNew.png';
import techtalk from '../Images/Sangam Events/TechTalksNew.png';
import battleground from '../Images/Sangam Events/BattleGroundNew.png';
import vigyan from '../Images/Sangam Events/VigyanamRamanamNew.png';
import paper from '../Images/Sangam Events/PapperPressNew.png';
import techmeme from '../Images/Sangam Events/TechMemeNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';
import { FormLink } from './Forms';
import battle from '../DownloadFiles/BattlegroundRules.pdf';
import paperpress from '../DownloadFiles/PaperPresentationRules.pdf';
import Meme from '../DownloadFiles/TechMemeRules.pdf';
import quizoo from '../DownloadFiles/Quiz-O-MeterRules.pdf';
import prodes from '../DownloadFiles/ProductDesignRules.pdf';

function Common() {

    return (
        <div className='cont-comm' >
            <div className='pair-1'>
                <div className='quizo-meter'>
                    <div className='data'>
                        <img src={quizometer} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={quizoo} download >
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
                <div className='pro-des'>
                    <div className='data'>
                        <img src={prodesign} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={prodes} download >
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
                <div className='vichar'>
                    <div className='data'>
                        <img src={vichar} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='tech-talks'>
                    <div className='data'>
                        <img src={techtalk} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-3'>
                <div className='battle-ground'>
                    <div className='data'>
                        <img src={battleground} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={battle} download >
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
                <div className='vigyanam'>
                    <div className='data'>
                        <img src={vigyan} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-4'>
                <div className='paper-pres'>
                    <div className='data'>
                        <img src={paper} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={paperpress} download >
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
                <div className='tech-meme'>
                    <div className='data'>
                        <img src={techmeme} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        <a href={Meme} download >
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

export default Common;