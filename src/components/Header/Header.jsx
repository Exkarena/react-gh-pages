import React, { useState } from 'react'
import './Header.css';
import '../style.css';
import openModal from './ModalWindow';
import App from './Timer';
import Modal from './ModalWindow';

export default function Header() {
  const [modWin, setModWin] = useState(false);
  const openModal = () => {
    setModWin(true)
  }
  const closeModal = () => {
    setModWin(false)
  }
  return (
    <div id="header" className="header" >
      <div id="hat" className="hat">
        <div className="h-musik">
          Musik.
        </div>
        <div id="list_up" className="top_list">
          <a className="el-of-top-list">
            home
          </a>
          <a className="el-of-top-list">
            speakers
          </a>
          <a className="el-of-top-list">
            schedule
          </a>
          <a className="el-of-top-list">
            contact us
          </a>
          <button className="button-get-ticket" onClick={() => openModal()}>
            get tickets
          </button>
        </div>

      </div>
      <div className="">
        <div className="big-in-hat">
          <div>The best  Experience of</div>
          <span className="orange-color">Music</span>
          <span> In 2021</span>
        </div>
        <div className="under-big-in-hat">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="button-and-ref">
          <button type="button" name="button-get-started" className="button-get-started">Get started</button>
          <a id="watch-video" className="watch-video">
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.0001 47.3333C11.1131 47.3333 0.666748 36.887 0.666748 24C0.666748 11.113 11.1131 0.666626 24.0001 0.666626C36.8871 0.666626 47.3334 11.113 47.3334 24C47.3334 36.887 36.8871 47.3333 24.0001 47.3333ZM24.0001 42.6666C28.9508 42.6666 33.6987 40.7 37.1994 37.1993C40.7001 33.6986 42.6668 28.9507 42.6668 24C42.6668 19.0493 40.7001 14.3013 37.1994 10.8006C33.6987 7.29995 28.9508 5.33329 24.0001 5.33329C19.0494 5.33329 14.3014 7.29995 10.8008 10.8006C7.30008 14.3013 5.33342 19.0493 5.33342 24C5.33342 28.9507 7.30008 33.6986 10.8008 37.1993C14.3014 40.7 19.0494 42.6666 24.0001 42.6666V42.6666ZM20.7847 15.635L32.1691 23.223C32.2971 23.3082 32.4021 23.4237 32.4747 23.5592C32.5473 23.6948 32.5853 23.8462 32.5853 24C32.5853 24.1537 32.5473 24.3051 32.4747 24.4407C32.4021 24.5763 32.2971 24.6918 32.1691 24.777L20.7824 32.365C20.642 32.458 20.479 32.5114 20.3108 32.5193C20.1425 32.5273 19.9753 32.4895 19.8267 32.4101C19.6782 32.3307 19.5539 32.2126 19.467 32.0682C19.3802 31.9239 19.334 31.7587 19.3334 31.5903V16.4096C19.3337 16.2408 19.3798 16.0752 19.4668 15.9306C19.5538 15.7859 19.6783 15.6675 19.8273 15.588C19.9762 15.5085 20.1439 15.4709 20.3125 15.4791C20.4811 15.4874 20.6443 15.5413 20.7847 15.635V15.635Z" fill="white" />
            </svg>
            Watch video
          </a>
        </div>
      </div>
      <div className="timer">
        <App />
      </div>
      {modWin ? <Modal closeModal={closeModal} /> : null}
    </div>
  )
}
