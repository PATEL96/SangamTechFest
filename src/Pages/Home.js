import React from 'react';
import './Pages.css'
import image from '../Images/Eng Poster Final-01.png'

function Home() {

    return (
        <div className='cont-home' >
            <img src={image} alt="none" className='home-img' />
        </div>
    );
}

export default Home;