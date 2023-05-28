import React from 'react'
import './ModalWindow.css';
import '../style.css';
import Ticket from './Ticket';

export default function Modal(props) {

  //дивы с видами билетов
  let modalTicketBasicDiv = <Ticket
    fontColor="basic-color" name="Basic"
    cost="100$"
    seatSuggest="ticket-suggest-yes" seat="1 Seat Available"
    wifiSuggest="ticket-suggest-no"
    foodSuggest="ticket-suggest-no"
  />
  let modalTicketStandartDiv = <Ticket
    fontColor="standart-color" name="Standart"
    cost="150$"
    seatSuggest="ticket-suggest-yes" seat="1 Seat Available"
    wifiSuggest="ticket-suggest-yes"
    foodSuggest="ticket-suggest-no"
  />
  let modalTicketPremiumDiv = <Ticket
    fontColor="premium-color" name="Premium"
    cost="200$"
    seatSuggest="ticket-suggest-yes" seat="2 Seat Available"
    wifiSuggest="ticket-suggest-yes"
    foodSuggest="ticket-suggest-yes"
  />

  return (
    <div id="backgroundDiv" className="backgroundDiv ">
      <div className="centerDiv">
        <div className="modalWightDiv">
          <div className="modalTitleDiv">
            Choose a Tier that's right for you
          </div>
          <div className="modalTicketsDiv">
            {modalTicketBasicDiv}
            {modalTicketStandartDiv}
            {modalTicketPremiumDiv}
          </div>
          <div className="div-close-button">
            <button className="button-close" onClick={()=>props.closeModal()}>Закрыть</button>
          </div>
        </div>
      </div>
    </div >
  )
}
