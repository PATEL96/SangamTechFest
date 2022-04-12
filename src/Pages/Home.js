import React from 'react';
import './Pages.css'
import image from '../Images/Eng Poster Final-01.png'
import SangamEvent from '../DownloadFiles/SangamEvents.pdf';
import SangamPposter from '../DownloadFiles/SangamPoster.pdf';
import trailer from '../Images/Trailer.mp4';

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
            <img src={image} alt="none" className='home-img' />
            <video autoPlay loop controls muted style={{
                width: "90%",
                paddingTop: "50px",
                paddingBottom: "50px",
                zIndex: "-1"
            }} >
                <source src={trailer} type='video/mp4' />
            </video>
        </div>
    );
}

export default Home;