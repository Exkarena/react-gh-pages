import React, { useEffect } from 'react'
import '../style.css';
import './Testimonials.css';

import photo1 from '../image/test1.png';

import photo2 from '../image/test2.png';
import photo3 from '../image/test3.png';


function AppTestimonials() {

  let imgfetch = React.createElement("img", {src: ""})

  // let xhr = new XMLHttpRequest()
  // xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
  // xhr.responseType='json'
  // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
  // xhr.onLoad = () => {
  //   console.log(xhr.response);
  // }
  
  // xhr.send();
  
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response =>{
    // console.log(response)
    return response.json()
  })
  .then(response =>{
    // console.log(response.sprites)
    for(let key in response.sprites){
      console.log(response.sprites[key])
      imgfetch = React.createElement("img", {src: "response.sprites[key]"})
    }
    console.log(imgfetch)
  })

  return (
    <div id="testimonials" className="parts">
      <p className="test-big-text">Testimonials</p>
      <div id="cards" className="test-cards">
        <div id="card1" className="test-card item">
        <svg className="double-dots-up" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.72875 15.6513C1.44125 14.2838 0.75 12.7501 0.75 10.2638C0.75 5.88881 3.82125 1.96756 8.2875 0.0288086L9.40375 1.75131C5.235 4.00631 4.42 6.93256 4.095 8.77756C4.76625 8.43006 5.645 8.30881 6.50625 8.38881C8.76125 8.59756 10.5388 10.4488 10.5388 12.7501C10.5388 13.9104 10.0778 15.0232 9.25734 15.8437C8.43687 16.6641 7.32407 17.1251 6.16375 17.1251C4.8225 17.1251 3.54 16.5126 2.72875 15.6513ZM15.2288 15.6513C13.9412 14.2838 13.25 12.7501 13.25 10.2638C13.25 5.88881 16.3213 1.96756 20.7875 0.0288086L21.9038 1.75131C17.735 4.00631 16.92 6.93256 16.595 8.77756C17.2662 8.43006 18.145 8.30881 19.0062 8.38881C21.2612 8.59756 23.0387 10.4488 23.0387 12.7501C23.0387 13.9104 22.5778 15.0232 21.7573 15.8437C20.9369 16.6641 19.8241 17.1251 18.6637 17.1251C17.3225 17.1251 16.04 16.5126 15.2288 15.6513Z" fill="#381DDB" />
          </svg>
          <p className="test-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="class1">
          <svg className="double-dots-down" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0598 1.5025C22.3473 2.87 23.0386 4.40375 23.0386 6.89C23.0386 11.265 19.9673 15.1863 15.5011 17.125L14.3848 15.4025C18.5536 13.1475 19.3686 10.2212 19.6936 8.37625C19.0223 8.72375 18.1436 8.845 17.2823 8.765C15.0273 8.55625 13.2498 6.705 13.2498 4.40375C13.2498 3.24343 13.7108 2.13063 14.5312 1.31016C15.3517 0.489684 16.4645 0.0287481 17.6248 0.028748C18.9661 0.0287479 20.2486 0.641249 21.0598 1.5025ZM8.55982 1.5025C9.84732 2.87 10.5386 4.40375 10.5386 6.89C10.5386 11.265 7.46733 15.1863 3.00108 17.125L1.88483 15.4025C6.05358 13.1475 6.86858 10.2213 7.19358 8.37625C6.52232 8.72375 5.64357 8.845 4.78233 8.765C2.52733 8.55625 0.749826 6.705 0.749825 4.40375C0.749825 3.24343 1.21076 2.13063 2.03123 1.31016C2.8517 0.489685 3.9645 0.0287492 5.12482 0.0287491C6.46607 0.028749 7.74857 0.64125 8.55982 1.5025Z" fill="#381DDB" />
          </svg>
          </div>
          <div className="test-back"></div>
          <div id="person" className="test-person">
            <img src={photo1} />
            <p className="test-name">Jhon Jhon</p>
          </div>
        </div>
        <div id="card2" className="test-card item" for="t-2">
        <svg className="double-dots-up" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.72875 15.6513C1.44125 14.2838 0.75 12.7501 0.75 10.2638C0.75 5.88881 3.82125 1.96756 8.2875 0.0288086L9.40375 1.75131C5.235 4.00631 4.42 6.93256 4.095 8.77756C4.76625 8.43006 5.645 8.30881 6.50625 8.38881C8.76125 8.59756 10.5388 10.4488 10.5388 12.7501C10.5388 13.9104 10.0778 15.0232 9.25734 15.8437C8.43687 16.6641 7.32407 17.1251 6.16375 17.1251C4.8225 17.1251 3.54 16.5126 2.72875 15.6513ZM15.2288 15.6513C13.9412 14.2838 13.25 12.7501 13.25 10.2638C13.25 5.88881 16.3213 1.96756 20.7875 0.0288086L21.9038 1.75131C17.735 4.00631 16.92 6.93256 16.595 8.77756C17.2662 8.43006 18.145 8.30881 19.0062 8.38881C21.2612 8.59756 23.0387 10.4488 23.0387 12.7501C23.0387 13.9104 22.5778 15.0232 21.7573 15.8437C20.9369 16.6641 19.8241 17.1251 18.6637 17.1251C17.3225 17.1251 16.04 16.5126 15.2288 15.6513Z" fill="#381DDB" />
          </svg>
          <p className="test-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="class1">
          <svg className="double-dots-down" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0598 1.5025C22.3473 2.87 23.0386 4.40375 23.0386 6.89C23.0386 11.265 19.9673 15.1863 15.5011 17.125L14.3848 15.4025C18.5536 13.1475 19.3686 10.2212 19.6936 8.37625C19.0223 8.72375 18.1436 8.845 17.2823 8.765C15.0273 8.55625 13.2498 6.705 13.2498 4.40375C13.2498 3.24343 13.7108 2.13063 14.5312 1.31016C15.3517 0.489684 16.4645 0.0287481 17.6248 0.028748C18.9661 0.0287479 20.2486 0.641249 21.0598 1.5025ZM8.55982 1.5025C9.84732 2.87 10.5386 4.40375 10.5386 6.89C10.5386 11.265 7.46733 15.1863 3.00108 17.125L1.88483 15.4025C6.05358 13.1475 6.86858 10.2213 7.19358 8.37625C6.52232 8.72375 5.64357 8.845 4.78233 8.765C2.52733 8.55625 0.749826 6.705 0.749825 4.40375C0.749825 3.24343 1.21076 2.13063 2.03123 1.31016C2.8517 0.489685 3.9645 0.0287492 5.12482 0.0287491C6.46607 0.028749 7.74857 0.64125 8.55982 1.5025Z" fill="#381DDB" />
          </svg>
          </div>
          <div className="test-back"></div>
          <div id="person" className="test-person">
            <img src={photo2} />
            <p className="test-name">Linda</p>
          </div>
        </div>
        <div id="card3" className="test-card item" for="t-3">
          <svg className="double-dots-up" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.72875 15.6513C1.44125 14.2838 0.75 12.7501 0.75 10.2638C0.75 5.88881 3.82125 1.96756 8.2875 0.0288086L9.40375 1.75131C5.235 4.00631 4.42 6.93256 4.095 8.77756C4.76625 8.43006 5.645 8.30881 6.50625 8.38881C8.76125 8.59756 10.5388 10.4488 10.5388 12.7501C10.5388 13.9104 10.0778 15.0232 9.25734 15.8437C8.43687 16.6641 7.32407 17.1251 6.16375 17.1251C4.8225 17.1251 3.54 16.5126 2.72875 15.6513ZM15.2288 15.6513C13.9412 14.2838 13.25 12.7501 13.25 10.2638C13.25 5.88881 16.3213 1.96756 20.7875 0.0288086L21.9038 1.75131C17.735 4.00631 16.92 6.93256 16.595 8.77756C17.2662 8.43006 18.145 8.30881 19.0062 8.38881C21.2612 8.59756 23.0387 10.4488 23.0387 12.7501C23.0387 13.9104 22.5778 15.0232 21.7573 15.8437C20.9369 16.6641 19.8241 17.1251 18.6637 17.1251C17.3225 17.1251 16.04 16.5126 15.2288 15.6513Z" fill="#381DDB" />
          </svg>
          <p className="test-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="class1">
          <svg className="double-dots-down" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0598 1.5025C22.3473 2.87 23.0386 4.40375 23.0386 6.89C23.0386 11.265 19.9673 15.1863 15.5011 17.125L14.3848 15.4025C18.5536 13.1475 19.3686 10.2212 19.6936 8.37625C19.0223 8.72375 18.1436 8.845 17.2823 8.765C15.0273 8.55625 13.2498 6.705 13.2498 4.40375C13.2498 3.24343 13.7108 2.13063 14.5312 1.31016C15.3517 0.489684 16.4645 0.0287481 17.6248 0.028748C18.9661 0.0287479 20.2486 0.641249 21.0598 1.5025ZM8.55982 1.5025C9.84732 2.87 10.5386 4.40375 10.5386 6.89C10.5386 11.265 7.46733 15.1863 3.00108 17.125L1.88483 15.4025C6.05358 13.1475 6.86858 10.2213 7.19358 8.37625C6.52232 8.72375 5.64357 8.845 4.78233 8.765C2.52733 8.55625 0.749826 6.705 0.749825 4.40375C0.749825 3.24343 1.21076 2.13063 2.03123 1.31016C2.8517 0.489685 3.9645 0.0287492 5.12482 0.0287491C6.46607 0.028749 7.74857 0.64125 8.55982 1.5025Z" fill="#381DDB" />
          </svg>
          </div>
          <div className="test-back"></div>
          <div id="person" className="test-person">
            <img src={photo3} />
            <p className="test-name">Suny</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTestimonials;
