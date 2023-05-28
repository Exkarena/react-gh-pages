import React from 'react'
import '../style.css';
import './AboutMusic.css';
import BackImg from '../image/about_music_back.jpg';
import FrontImg from '../image/about_music_front.jpg';


export default function AboutMusic() {
  // let cards = [{src:BackImg},{src:FrontImg}]

  return (
    <div id="about-music" className="parts about-music">
      <div id="photos" className="photos">
        <img className="back-img" src={BackImg}/>
        <img className="front-img" src={FrontImg}/>
      </div>
      <div id="AM-text" className="AM-text">
        <p className="big-text">About music</p>
        <p className="small-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="blue-button ">Learn more</button>
      </div>
      {/* {
        cards.map(card=>(
          <Slide huynya={card.src} asssdsfd={1}></Slide>
        ))
      } */}
    </div>
  )
}
