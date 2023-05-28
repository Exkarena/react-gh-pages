import React, {useState} from 'react'
import '../style.css';
import './Shots.css';
import Shot from './Shot';
import photo1 from '../image/shots1.png';
import photo2 from '../image/shots2.png';
import photo3 from '../image/shots3.png';


export default function Shots() {

  let photos = [{photo1}, {photo2}, {photo3}];
  let likes = [512,449,665];
  let coms = [49,36,64];
  // const [counter, setCounter] = useState(0);

  return (
    <div id="shots" className="parts shots">
      <p className="shots-big-text">See out best shots</p>
      <div className="shots-back">
      </div>
      <svg className="inst" width="431" height="431" viewBox="0 0 431 431" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.1" clip-path="url(#clip0_893_403)">
          <path d="M215.5 35.9165C264.293 35.9165 270.381 36.0961 289.524 36.994C308.65 37.8919 321.67 40.891 333.127 45.3446C344.98 49.906 354.965 56.0837 364.949 66.0506C374.081 75.0279 381.147 85.8872 385.655 97.8728C390.091 109.312 393.108 122.35 394.006 141.476C394.85 160.619 395.083 166.707 395.083 215.5C395.083 264.293 394.904 270.381 394.006 289.524C393.108 308.65 390.091 321.669 385.655 333.127C381.16 345.119 374.092 355.981 364.949 364.949C355.969 374.078 345.111 381.143 333.127 385.655C321.688 390.091 308.65 393.108 289.524 394.006C270.381 394.85 264.293 395.083 215.5 395.083C166.707 395.083 160.619 394.904 141.476 394.006C122.35 393.108 109.33 390.091 97.873 385.655C85.8827 381.156 75.0215 374.089 66.0508 364.949C56.9173 355.973 49.8512 345.114 45.3449 333.127C40.8912 321.687 37.8922 308.65 36.9942 289.524C36.1502 270.381 35.9167 264.293 35.9167 215.5C35.9167 166.707 36.0963 160.619 36.9942 141.476C37.8922 122.332 40.8912 109.33 45.3449 97.8728C49.8387 85.8798 56.9065 75.0176 66.0508 66.0506C75.0241 56.9139 85.8845 49.8473 97.873 45.3446C109.33 40.891 122.332 37.8919 141.476 36.994C160.619 36.15 166.707 35.9165 215.5 35.9165ZM215.5 125.708C191.686 125.708 168.847 135.168 152.008 152.008C135.169 168.847 125.708 191.686 125.708 215.5C125.708 239.314 135.169 262.153 152.008 278.992C168.847 295.831 191.686 305.292 215.5 305.292C239.314 305.292 262.153 295.831 278.992 278.992C295.832 262.153 305.292 239.314 305.292 215.5C305.292 191.686 295.832 168.847 278.992 152.008C262.153 135.168 239.314 125.708 215.5 125.708ZM332.229 121.219C332.229 115.265 329.864 109.555 325.654 105.346C321.445 101.136 315.735 98.7707 309.781 98.7707C303.828 98.7707 298.118 101.136 293.908 105.346C289.698 109.555 287.333 115.265 287.333 121.219C287.333 127.172 289.698 132.882 293.908 137.092C298.118 141.301 303.828 143.667 309.781 143.667C315.735 143.667 321.445 141.301 325.654 137.092C329.864 132.882 332.229 127.172 332.229 121.219ZM215.5 161.625C229.789 161.625 243.492 167.301 253.595 177.404C263.699 187.508 269.375 201.211 269.375 215.5C269.375 229.788 263.699 243.492 253.595 253.595C243.492 263.699 229.789 269.375 215.5 269.375C201.212 269.375 187.508 263.699 177.405 253.595C167.301 243.492 161.625 229.788 161.625 215.5C161.625 201.211 167.301 187.508 177.405 177.404C187.508 167.301 201.212 161.625 215.5 161.625Z" fill="#FC5252" />
        </g>
        <defs>
          <clipPath id="clip0_893_403">
            <rect width="431" height="431" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div id="shots_cards" className="shots-cards">
      {/* {
        [...Array(3)].map((item, counter)=>
          <Shot key={counter} src={photos[counter]} like={counter} com={counter}></Shot>
        )
      } */}
        <div id="shot1" className="shots-card">
          <img src={photo1} />
          <div>
            <div className="shots-lcom">
              <div className="like">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898V1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998V3.16998Z" fill="#222222" />
                </svg>
                486
              </div>
              <div className="like">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_893_414)">
                    <path d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z" fill="#222222" />
                  </g>
                  <defs>
                    <clipPath id="clip0_893_414">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                46
              </div>
            </div>
            <div className="shots-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="shots-tags">
              #loremipsum
            </div>
          </div>
        </div>
        <div id="shot2" className="shots-card">
          <img src={photo2} />
          <div>
            <div className="shots-lcom">
              <div className="like">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898V1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998V3.16998Z" fill="#222222" />
                </svg>
                500
              </div>
              <div className="like">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_893_414)">
                    <path d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z" fill="#222222" />
                  </g>
                  <defs>
                    <clipPath id="clip0_893_414">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                50
              </div>
            </div>
            <div className="shots-text">
              Lorem ipsum
            </div>
            <div className="shots-tags">
              #loremipsum
            </div>
          </div>
        </div>
        <div id="shot3" className="shots-card">
          <img src={photo3} />
          <div>
            <div className="shots-lcom">
              <div className="like">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898V1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998V3.16998Z" fill="#222222" />
                </svg>
                603
              </div>
              <div className="like">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_893_414)">
                    <path d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z" fill="#222222" />
                  </g>
                  <defs>
                    <clipPath id="clip0_893_414">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                60
              </div>
            </div>
            <div className="shots-text">
              Lorem ipsum
            </div>
            <div className="shots-tags">
              #loremipsum
            </div>
          </div>
        </div>
        <div id="shot4" className="shots-card">
          <img src={photo2} />
          <div>
            <div className="shots-lcom">
              <div className="like">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898V1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998V3.16998Z" fill="#222222" />
                </svg>
                474
              </div>
              <div className="like">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_893_414)">
                    <path d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z" fill="#222222" />
                  </g>
                  <defs>
                    <clipPath id="clip0_893_414">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                47
              </div>
            </div>
            <div className="shots-text">
              Lorem ipsum
            </div>
            <div className="shots-tags">
              #loremipsum
            </div>
          </div>
        </div>
        <div id="shot5" className="shots-card">
          <img src={photo1} />
          <div>
            <div className="shots-lcom">
              <div className="like">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898V1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998V3.16998Z" fill="#222222" />
                </svg>
                650
              </div>
              <div className="like">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_893_414)">
                    <path d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z" fill="#222222" />
                  </g>
                  <defs>
                    <clipPath id="clip0_893_414">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                64
              </div>
            </div>
            <div className="shots-text">
              Lorem ipsum
            </div>
            <div className="shots-tags">
              #loremipsum
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}