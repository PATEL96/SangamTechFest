import React from 'react';
import './Pages.css';
import dreamcar from '../Images/Sangam Events/DreamCarNew.png';
import quiz from '../Images/Sangam Events/QuizNew.png';
import autocad from '../Images/Sangam Events/AutoCadNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png'
import { FormLink } from './Forms';

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
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            • Only 4studens can participate in the event.<br />
                            • The workpiece material as well as the tools will be provided to the team.<br />
                            • The completion of task should be within the given time. Extra time will be provided.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Requirements:-
                        <div className='rule-list'>
                            • ID Card
                        </div>
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
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            • Be punctual enough to reach the event venue on time. If late, you will not be allowed to give the Quiz.<br />
                            • Any kind of cheating material will not be entertained during the quiz. If found, you will be disqualified straight away.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Requirements:-
                        <div className='rule-list'>
                            •ID Card.<br />
                            •Pen/Pencil.<br />
                            •Calculator (if required).<br />
                        </div>
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
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            •Only AUTOCAD Software is valid for the event.<br />
                            •Computer Labs will be provided for utilizing the software.<br />
                            •Complete the task in the given time period. No extra time will be provided.<br />
                            •Maximum 2 participants are allowed. A single person can also participate.<br />
                            •Any kind of Stationary Item(like book page, calculator) will not be allowed in the Lab during the event session.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Requirements:-
                        <div className='rule-list'>
                            •AUTOCAD <br />
                        </div>
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