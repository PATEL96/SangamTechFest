import React from 'react';
import './Pages.css';
import codewar from '../Images/Sangam Events/CodeWarNew.png';
import webappdev from '../Images/Sangam Events/WebAppDevNew.png';
import gamedev from '../Images/Sangam Events/GameDevNew.png';
import proeditors from '../Images/Sangam Events/ProEditorsNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';

function ItCeAiDs() {

    return (
        <div className='cont-it' >
            <div className='pair-1'>
                <div className='pro-editors'>
                    <div className='data'>
                        <img src={proeditors} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Venue:-
                        <div className='rule-list'>
                            • Event Time:-4 hour.<br />
                            • Technology:-<br />
                            ◦ Any Video Editing App.<br />
                            ◦ Any Photo Editing App.<br />
                            • Faculties:-Sapan Sir.<br />
                            • Requirements:- Take your own Laptop.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            ▪ Come before 15 min of competition Starts.<br />
                            ▪ Pass Must Require for Entry in Lab/Class.<br />
                            ▪ No Mobile Access.<br />
                            ▪ Internet access is for collecting require materials not for searching  full content.<br />
                            ▪ If Any team is caught by cheating or accessing phone then team will be disqualified.<br />
                            ▪ If you forgot to take your Laptop with you then college will not be responsible for that.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules during Event:-
                        <div className='rule-list'>
                            • No Mobile Access.<br />
                            • If Any team is caught by cheating or accessing phone then team will be disqualified.<br />
                            • If you forgot to take your Laptop with you then college will not be responsible for that.<br /><br />
                            Round 1 (Photo Editing):-<br />
                            • Net access only 20 - 30 min of starting period for planning & collect requires Background , Images etc & Package , Music Installation.<br />
                            • 1 and half hour - 2 hour for Photo Editing.<br /><br />
                            Round 2 (Video Editing):-
                            • Net access only 20 - 30 min of starting period for planning & collect requires Background , Images etc & Package , Music Installation.<br />
                            • 1 and half hour - 2 hour for Photo Editing.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://forms.gle/xF3y6jhz5JHFMZZw7' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='web-app-dev'>
                    <div className='data'>
                        <img src={webappdev} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Venue:-
                        <div className='rule-list'>
                            • Event Time:- <br />
                            1) Full stack Development -2 hours<br />
                            2) Android - 1 & 30 hour.<br />
                            • Technology:-<br />
                            1) Full Stack Development (MERN Stack)<br />
                            2) Android (Android Studio)<br />
                            • Faculties:-<br />
                            1) Supriya ma’am-Full Stack Dev. <br />
                            2) Mithila ma’am- Android.<br />
                            • Requirements:-<br />
                            ◦ Full stack Development :-<br /> VS Code - Event in College Lab ( Don’t have to take your Devices).<br />
                            ◦ Android :- Android Studio -Take Your own Laptop.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            ▪ Come before 15 min of competition Starts.<br />
                            ▪ Pass Must Require for Entry in Lab/Class.<br />
                            ▪ No Mobile Access.<br />
                            ▪ If Any team is caught by cheating or accessing phone then team will be disqualified immediately.<br />
                            ▪ If you forgot to take your Laptop with you then college will not be responsible for that.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules during Event:-
                        <div className='rule-list'>
                            • No Mobile Access.<br />
                            • Internet access is not for searching code or any other references.<br />
                            • If Any team is caught by cheating or accessing phone then team will be disqualified immediately.<br /><br />
                            Full Stack Development(MERN Stack):<br />
                            • Internet access is not for searching code or any other references.<br />
                            • Round 1 (Frontend) :-<br />
                            ◦ Net access only 15 min of starting period for collect requires Background , Images etc & Package Installation.<br />
                            ◦ 30-45 min for Frontend.<br />
                            • Round 2 (Backend) -<br />
                            ◦ 45min-1hour for backend.<br /><br />
                            Android(Android Studio):<br />
                            • Internet access is not for searching code or any other references.<br />
                            • If you forgot to take your Laptop with you then college will not be responsible for that.<br />
                            • Round 1 (Designing) -<br />
                            ◦ Net access only 15 min of starting period for collect requires Background , Images etc & Package Installation.<br />
                            ◦ 30-45 min for Designing<br />
                            • Round 2 (Implementation) -<br />
                            ◦ 45min-1hour for Coding<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://forms.gle/xF3y6jhz5JHFMZZw7' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='game-dev'>
                    <div className='data'>
                        <img src={gamedev} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Venue:-
                        <div className='rule-list'>
                            • EventTime:-1 &30 hour.<br />
                            • Technology:- Html, Css, JavaScript / C++.<br />
                            • Faculties:-Jenish Lavji Sir.<br />
                            • Requirements:- VS Code- Event in College Lab ( Don’t  have to take your Devices)<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            ▪ Come before 15 min of competition Starts.<br />
                            ▪ Pass Must Require for Entry in Lab/Class.<br />
                            ▪ No Mobile Access.<br />
                            ▪ If Any team is caught by cheating or accessing phone then team will be disqualified.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules during Event:-
                        <div className='rule-list'>
                            • Net access only 15-20 min of starting period for collect requires Background , Images etc & Package Installation.<br />
                            • 45 min - 1 hour for coding.<br />
                        </div>
                    </div>
                    <button className='registartion-button'>
                        <a href='https://forms.gle/xF3y6jhz5JHFMZZw7' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='codewar'>
                    <div className='data'>
                        <img src={codewar} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <div className='rules'>
                        -:Venue:-
                        <div className='rule-list'>
                            • Event Time:- 45 min - 1 Hour.<br />
                            • Languages :- C / Python.<br />
                            • Faculties :- Mihir sir , Fenil sir.<br />
                            • Requirements:- Vs code -Event in College Lab ( Don’t have to take your Devices).<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules & Regulations:-
                        <div className='rule-list'>
                            ▪ Come before 15 min of competition Starts.<br />
                            ▪ Pass Must Require for Entry in Lab/Class.<br />
                            ▪ No Mobile Access.<br />
                            ▪ No Internet Access.<br />
                            ▪ If Any team is caught by cheating or accessing phone then team will be disqualified immediately.<br />
                        </div>
                    </div>
                    <div className='rules'>
                        -:Rules during Event:-
                        <div className='rule-list'>
                            • No Mobile Access.<br />
                            • If Any Team/Member is caught by cheating or accessing phone then team will be disqualified immediately.<br />
                        </div>
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

export default ItCeAiDs;