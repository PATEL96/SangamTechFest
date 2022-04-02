import React from 'react';
import './Pages.css';
import medichem from '../Images/Sangam Events/MediChemNew.png';
import working from '../Images/Sangam Events/WorkingModelNew.png';
import engiochem from '../Images/Sangam Events/EnggioOChemistryNew.png';
import quizee from '../Images/Sangam Events/QuizEeNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';

function Chemical() {

    return (
        <div className='cont-chem' >
            <div className='pair-1'>
                <div className='medi-chem'>
                    <div className='data'>
                        <img src={medichem} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            1) Participants should bring their Requirements along them on the Day of Event.<br />
                            2) Good Design, Explanation, Quality of Content and Confidence of Speaking will be the Merit criteria.<br />
                            3) The decision of the Judges will be Final and no sort of Dispute will be Entertained.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='working-model'>
                    <div className='data'>
                        <img src={working} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            1) Maximum Participants per team is 4.<br />
                            2) The Team shoul Display their Project Throughout the Event schedule, failing which may be liable for Disqualification.<br />
                            3) Participants should bring their Requirements along them on the Day of Event.<br />
                            4) Good Design and Ease in Navigaion will be the Merit criteria.<br />
                            5) The decision of the Judges will be Final and no sort of Dispute will be Entertained.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='enggio'>
                    <div className='data'>
                        <img src={engiochem} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            1) Try to Avoid ParaGraphs and Post idae in Points.<br />
                            2) Good Design and Ease in Navigaion will be the Merit criteria.<br />
                            3) The decision of the Judges will be Final and no sort of Dispute will be Entertained.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='quiz-ee'>
                    <div className='data'>
                        <img src={quizee} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            1) There will be Three Round depending on the Number of Participants.<br />
                            2) Each Round will be of 10 minutes Duration.<br />
                            3) There will be 20 Question in each Round.<br />
                            4) Only 10 Participants will go to the Fina Round.<br />
                            5) Every correct Answer carries 1 point.<br />
                            6) Venue Will be Notified Later.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chemical;