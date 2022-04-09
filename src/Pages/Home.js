import React from 'react';
import './Pages.css'
import image from '../Images/Eng Poster Final-01.png'
import Notice from './Notice';
import SangamEvent from '../DownloadFiles/SangamEvents.pdf';
import SangamPposter from '../DownloadFiles/SangamPoster.pdf';

function Home() {

    return (
        <div className='cont-home' >
            <div className='sangam-list'>
                <div className='rules'>
                    <a href={SangamEvent} download >
                        <button className='download-button'>
                            <i className="fas fa-download" />
                            Sangam-Department Flyers
                        </button>
                    </a>
                </div>
                <div className='rules'>
                    <a href={SangamPposter} download >
                        <button className='download-button'>
                            <i className="fas fa-download" />
                            Sangam-Posters
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