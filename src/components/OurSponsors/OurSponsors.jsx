import React from 'react'
import '../style.css';
import './OurSponsors.css';
import google from '../image/sponsors google.png';
import MS from '../image/sponsors MS.png';
import airbnb from '../image/sponsors airbnb.png';
import axure from '../image/sponsors axure.png';
import apple from '../image/sponsors apple.png';
import FB from '../image/sponsors fb.png';
import nokia from '../image/sponsors nokia.png';
import oracle from '../image/sponsors oracle.png';


export default function OurSponsors() {

  return (
    <div id="our sponsors" className="parts our-sponsors">
      <p>Our Sponsors</p>
      <div className="sponsors">
        <div className="row">
          <img className="sponsor" src={google} />
          <img className="sponsor" src={MS} />
          <img className="sponsor" src={airbnb} />
          <img className="sponsor" src={axure} />
        </div>
        <div className="row">
          <img className="sponsor" src={apple} />
          <img className="sponsor" src={FB} />
          <img className="sponsor" src={nokia} />
          <img className="sponsor" src={oracle} />
        </div>
      </div>

      <button className="blue-button"> Become a Sponsor</button>
    </div>
  )
}
