import React from 'react';
import './Pages.css'
import image from '../Images/Eng Poster Final-01.png'
import Notice from './Notice';

function Home() {

    return (
        <div className='cont-home' >
            <Notice />
            <img src={image} alt="none" className='home-img' />
        </div>
    );
}

export default Home;