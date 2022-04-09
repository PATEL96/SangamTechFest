import React from 'react';
import './Pages.css'
import image from '../Images/Eng Poster Final-01.png'
import Notice from './Notice';
import SangamEvent from '../DownloadFiles/SangamEvents.pdf';

function Home() {

    return (
        <div className='cont-home' >
            <div className='sangam-list'>
                <div className='rules'>
                    <a href={SangamEvent} download >
                        <button className='download-button'>
                            <i className="fas fa-download" />
                            Sangam Department Brochure
                        </button>
                    </a>
                </div>
                <div className='rules'>
                    <a href={SangamEvent} download >
                        <button className='download-button'>
                            <i className="fas fa-download" />
                            Sangam Brochure
                        </button>
                    </a>
                </div>
            </div>
            <Notice />
            <img src={image} alt="none" className='home-img' />
        </div>
    );
}

export default Home;