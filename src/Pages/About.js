import React from "react";
import './About.css';
import raj from '../Images/raj1.png';
import vinit from '../Images/vinit1.png';
import jp from '../Images/jp1.png';
import jv from '../Images/jv1.png';
import sudhakar from '../Images/sudhakar1.png';

function About() {
    let width = "container"

    return (
        <div className="cont-about">
            <div className={width}>
                <div className="img-place">
                    <div className="image1">
                        <img src={sudhakar} alt="none" className="image" />
                    </div>
                </div>
                <div className="edu">
                    <div className="name">
                        Sudhakar Nakka
                    </div>
                    <div className="department">
                        Asst. Professor<br />
                        Automobile
                    </div>
                </div>
                <div className="links">
                    <div className="social">
                        <a href="https://sudhakar.nakka@utu.ac.in" className="social-links">
                            <i className="fa-regular fa-envelope" /> e-Mail
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/sudhakar_official7/" className="social-links">
                            <i className="fa-brands fa-instagram" /> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className={width}>
                <div className="img-place">
                    <div className="image1">
                        <img src={jp} alt="none" className="image" />
                    </div>
                </div>
                <div className="edu">
                    <div className="name">
                        Jay Patel
                    </div>
                    <div className="department">
                        B. Tech (Automobile)<br />
                        Fourth Year
                    </div>
                </div>
                <div className="links">
                    <div className="social">
                        <a href="https://jp.photography.3405@gmail.com" className="social-links">
                            <i className="fa-regular fa-envelope" /> e-Mail
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/jp_photography_3405/" className="social-links">
                            <i className="fa-brands fa-instagram" /> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className={width}>
                <div className="img-place">
                    <div className="image1">
                        <img src={raj} alt="none" className="image" />
                    </div>
                </div>
                <div className="edu">
                    <div className="name">
                        Raj D. Patel
                    </div>
                    <div className="department">
                        B. Tech (I. T.)<br />
                        First Year
                    </div>
                </div>
                <div className="links">
                    <div className="social">
                        <a href="https://rajp08367@gmail.com" className="social-links">
                            <i className="fa-regular fa-envelope" /> e-Mail
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/PATEL96" className="social-links">
                            <i className="fa-brands fa-github" /> GithHub
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/raj.d.patel.96/" className="social-links">
                            <i className="fa-brands fa-instagram" /> Instagram
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.snapchat.com/add/dj_patel96" className="social-links">
                            <i className="fa-brands fa-snapchat" /> Snapchat
                        </a>
                    </div>
                </div>
            </div>
            <div className={width}>
                <div className="img-place">
                    <div className="image1">
                        <img src={vinit} alt="none" className="image" />
                    </div>
                </div>
                <div className="edu">
                    <div className="name">
                        Vinit S. Patel
                    </div>
                    <div className="department">
                        B. Tech (C. E.)<br />
                        First Year
                    </div>
                </div>
                <div className="links">
                    <div className="social">
                        <a href="https://vinitpatel742003@gmail.com" className="social-links">
                            <i className="fa-regular fa-envelope" /> e-Mail
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/Vinit-070" className="social-links">
                            <i className="fa-brands fa-github" /> GithHub
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://instagram.com/vinit.patel_07/" className="social-links">
                            <i className="fa-brands fa-instagram" /> Instagram
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.snapchat.com/add/vinitpatel070" className="social-links">
                            <i className="fa-brands fa-snapchat" /> Snapchat
                        </a>
                    </div>
                </div>
            </div>
            <div className={width}>
                <div className="img-place">
                    <div className="image1">
                        <img src={jv} alt="none" className="image" />
                    </div>
                </div>
                <div className="edu">
                    <div className="name">
                        Jay G. Vagadiya
                    </div>
                    <div className="department">
                        B. Tech (I. T.)<br />
                        First Year
                    </div>
                </div>
                <div className="links">
                    <div className="social">
                        <a href="https://jayvagadiya999@gmail.com" className="social-links">
                            <i className="fa-regular fa-envelope" /> e-Mail
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/Jaihere" className="social-links">
                            <i className="fa-brands fa-github" /> GithHub
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://instagram.com/jaihere.in/" className="social-links">
                            <i className="fa-brands fa-instagram" /> Instagram
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.snapchat.com/add/jayvagadiya_13" className="social-links">
                            <i className="fa-brands fa-snapchat" /> Snapchat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;