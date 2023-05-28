import React from 'react'
import './Ticket.css';
import '../style.css';


export default function Ticket(props) {
return (
  <div className={"ticket " +props.fontColor}>
    <div className="ticket-name">
      <p>{props.name}</p>
      <div className="ticket-cost">
        <p>
          {props.cost}
        </p>
      </div>
      <div className={props.seatSuggest}>
        <p>
          {props.seat}
        </p>
      </div>
      <div className={props.wifiSuggest}>
        <p>
          Access to WiFi Router
        </p>
      </div>
      <div className={props.foodSuggest}>
        <p>
          Free Food & Coffee
        </p>
      </div>
    </div>
  </div>
)
}
