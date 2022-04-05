import React from 'react';
import './Pages.css';
import bot from '../Images/Sangam Events/BotingNew.png';
import macing from '../Images/Sangam Events/MacingNew.png';
import roboyudh from '../Images/Sangam Events/RoboYudhNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';
import { FormLink } from './Forms';

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
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            1) Each team must have four members. Students from different departments or institute can foam a team.<br />
                            2) Team should bring their own extra batteries to avoid inconvenience.<br />
                            3) The organizer is not responsible for any type of sort or damage.<br />
                            4) Each candidate carry their ID cards.<br />
                            5) Only one attempt is allowed per team.<br />
                            6) Participants shall bring their own material to make a robot for the problem statement given.<br />
                            7) There will be total 3 rounds.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} target="_blank" className='form-link' >
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
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            1) There will 2 or 3 round on the basis of number of participants.<br />
                            2) All participants have to make their drawing in limited time in each round.<br />
                            3) In beginning round participants have to make 2D drawing and in final round they have to make isometric drawing.<br />
                            4) A Drawing will be given to the participants and participants have to draw in AUTOCAD.<br />
                            5) The Drawing should be made with proper dimensioning.<br />
                            6) Any discrepancy leads to disqualification of the candidate.<br />
                            7) For final round there only 10 group will be select out of number of participants.<br />
                            8) Venue of the events are C-LAB (13 And 14).<br />
                            9) Judgement will be done considering the technical details.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} target="_blank" className='form-link' >
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
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            2. Team should bring their own extra batteries to avoid inconvenience.<br />
                            3. The organizer is not responsible for any type of sort or damage.<br />
                            4. Each candidate carry their ID cards.<br />
                            6. Only one attempt is allowed per team.<br />
                            7. Participants shall bring their own material to make a robot for the problem statement given.<br />
                            8. There will be total 3 rounds.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} target="_blank" className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mechanical;