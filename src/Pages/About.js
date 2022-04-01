import React from "react";
import './About.css';
import raj from '../Images/raj1.png';
import vinit from '../Images/vinit1.png';

function About() {
    let width = "none";
    if (window.innerWidth >= 1250) {
        width = "container";
    } else if (window.innerWidth >= 1000) {
        width = "container-mobile";
    } else {
        width = "container-mobile-small";
    }

    return (
        <div className="cont-about">
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
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=fwmvGMBxTqtjKsJtkhsDMQBjfHNfXFxsmcKCNJSBNjVmlXCqdzmcmnFVrLRDMcBJJpfXxKHJTQbSpPBcjfDzTvkkKqBnJxGSPbWWXKHKqVcRwKDVpgHb" className="social-links">
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
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdmVLFFxvsnrnKHDRLFrlFsBTxmcbPvcZRsKcfLqkSslHXXCkFJRTNLwBVdPtPSmGDRDclHTbnPwjCqSNxZxBXhkxPBtfXjRGwnptWnQQwkzVfcL" className="social-links">
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
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=fwmvGMBxTqtjKsJtkhsDMQBjfHNfXFxsmcKCNJSBNjVmlXCqdzmcmnFVrLRDMcBJJpfXxKHJTQbSpPBcjfDzTvkkKqBnJxGSPbWWXKHKqVcRwKDVpgHb" className="social-links">
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
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdmVLFFxvsnrnKHDRLFrlFsBTxmcbPvcZRsKcfLqkSslHXXCkFJRTNLwBVdPtPSmGDRDclHTbnPwjCqSNxZxBXhkxPBtfXjRGwnptWnQQwkzVfcL" className="social-links">
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
        </div>
    );
}

export default About;