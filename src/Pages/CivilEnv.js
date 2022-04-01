import React from 'react';
import './Pages.css';
import qrCode from '../Images/Sangam Events/qrCode.png';
import bridgeBreakup from '../Images/Sangam Events/BridgeBreakupNew.png';
import aquaArena from '../Images/Sangam Events/AquaArenaNew.png';
import bobTheBuilder from '../Images/Sangam Events/BobTheBuilderNew.png';
import homesweethome from '../Images/Sangam Events/HomeSweetHomeNew.png'

function CivilEnv() {

    return (
        <div className='cont-civil' >
            <div className='pair-1'>
                <div className='bridge-breakup'>
                    <div className='data'>
                        <img src={bridgeBreakup} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules:-
                        <div className='rule-list'>
                            1. Participants need to make Bridge with the help of Ice-cream stick or Bamboo stick.<br />
                            2. Stick and Glue will be provided, material will be Limited.<br />
                            3. After completion, moving load act on structure to check Strength.<br />
                            4. Judgement is based on Strength of Structure.<br />
                            5. Maximum number of Members in a team is 4.<br />
                            6. Time limit will be 2hrs for completion a Task.<br />
                            7. Whole event complete in one round only. <br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='bob-the-builder'>
                    <div className='data'>
                        <img src={bobTheBuilder} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules:-
                        <div className='rule-list'>
                            1. Participants need to find  treasure first , in form of wooden block. <br />
                            2. Material provided will be Limited. <br />
                            3. After getting wooden block participants need to make structure form that block.<br />
                            4. Jury members remove 3 Block Randomly from structure, judgement is Based on Structure Stability. <br />
                            5. Maximum number of Members in a team is 4.<br />
                            6. Time Limit will be 2hrs for completion a Task<br />
                            7. Whole Event complete in one round only <br />
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
                <div className='home-sweet-home'>
                    <div className='data'>
                        <img src={homesweethome} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules:-<br />
                        <div className='rule-list'>
                            1. Make Plan on a Drawing Sheet Paper.<br />
                            2. Drawing Sheets, Thermocol, Card-Board
                            will be provided but Basic Accessories
                            like Pencil, Scale, etc. need to be bring by Own.<br />
                            3. After completion drawing on a sheet,
                            participant need to implement that drawing
                            in miniature form with the help of thermocol,
                            cardboard , wood etc.<br />
                            4. Maximum number of Members in a team is 4. <br />
                            5. Time Limit 2hrs for completion of Task.<br />
                            6. Event Completes only in one Round.
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='aqua-arena'>
                    <div className='data'>
                        <img src={aquaArena} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Rules:-
                        <div className='rule-list'>
                            1. Participants need to construct a Earthen Dam.<br />
                            2. Material and Space will be provided.<br />
                            3. Judgement will be base on the working capacity of Dam.<br />
                            4. Maximum number of Members in a team is 4.<br />
                            5. Time Limit will be 2hrs for completion a task.<br />
                            6. Whole event complete in one round only.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default CivilEnv;