import React from 'react'
import img1 from './assets/img/fortnite-pictures-b5kfcchwazwiz3cs 1.png'

const Section1 = () => {
  return (
    <div className='d-flex flex-column justify-content-between align-items-center m-5 p-3'>

        <h1 className='section1-header mb-4'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>
        <img className='section1-img mb-4' src={img1} alt='No Image'/>
        <p className='section1-para mb-4'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        <button className='section1-button mb-4'>Visit Website</button>
    </div>
  )
}

export default Section1