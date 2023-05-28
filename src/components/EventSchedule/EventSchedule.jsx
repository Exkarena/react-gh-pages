import React, { useEffect, useState } from 'react'
import '../style.css';
import './EventSchedule.css';
import Row from './Row';




export default function EventSchedule() {

  const [day, setDay] = useState(0);

  return (
    <div id="event-schedule" className="parts event-schedule"> Event Schedule
      <div className="content__element">
        <div className={(day === 0) ? "event__day--active" : "event__day--inactive"} id="day0" onClick={() => { setDay(0) }}>
          <p>Day 01</p>
          <p className="text--opacity">16 August</p>
        </div>
        <div className={(day === 1) ? "event__day--active" : "event__day--inactive"} id="day1" onClick={() => { setDay(1) }}>
          <p>Day 02</p>
          <p className="text--opacity">17 August</p>
        </div>
        <div className={(day === 2) ? "event__day--active" : "event__day--inactive"} id="day2" onClick={() => { setDay(2) }}>
          <p>Day 03</p>
          <p className="text--opacity">18 August</p>
        </div>
      </div>

      <div id="schedule__header" className="schedule">
        <div><p>Time   </p></div><div></div>
        <div><p>Content</p></div><div></div>
        <div><p>Speaker</p></div><div></div>
      </div>

      <div id="row1" className="schedule">
        <Row i={0+day*3} row={0}></Row>
      </div>
      <div id="row2" className="schedule">
      <Row i={1+day*3} row={1}></Row>
      </div>
      <div id="row3" className="schedule">
      <Row i={2+day*3} row={2}></Row>
      </div>

    </div>
  )
}
