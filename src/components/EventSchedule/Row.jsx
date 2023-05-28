import React, { useEffect, useState } from 'react'
import '../style.css';
import './EventSchedule.css';
import Speakers from './Speakers';
// import ph1 from '../image/sp1.png';


export default function Row(props) {
  const table_json = `[{"id":0,"time":"11:00 AM to 12:00 PM","content":"Vestibulum vel eros vel metus lacinia feugiat a nec metus.","speakers":[{"name":"Yui Ronald","image":"../image/Speaker1.png","booth":"Booth: 2F12"}],"text":"Preview","icon":"../image/icon1.png","color":"--color-black"},{"id":1,"time":"12:00 PM to 03:00 PM","content":"Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.","speakers":[{"name":"Bob John","image":"../image/Speaker2.png","booth":"Booth: 3G12"},{"name":"Yui Ronald","image":"../image/Speaker1.png","booth":"Booth: 2F12"},{"name":"Emma Satoshi","image":"../image/Speaker3.png","booth":"Booth: 2A35"}],"text":"Live","icon":"../image/icon1.png","color":"--color-red"},{"id":2,"time":"03:00 PM to 04:00 PM","content":"Vestibulum vel eros vel metus lacinia feugiat a nec metus.","speakers":[{"name":"Sasha Jackson","image":"../image/Speaker4.png","booth":"Booth: 2F18"},{"name":"Diana Brock","image":"../image/Speaker5.png","booth":"Booth: 2F24"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"},{"id":3,"time":"09:00 AM to 11:00 PM","content":"Proin eget nibh dictum, convallis quam vitae, bibendum odio. Vivamus aliquet euismod suscipit. Duis ac imperdiet mi, vel posuere nisi. Duis vitae magna id libero eleifend vulputate. Morbi non elit eget nunc euismod ullamcorper. Sed ut nibh porttitor, cursus turpis ac, luctus risus. Sed tincidunt, dolor sed varius pretium, nisl ante aliquet mi, a bibendum enim sapien ut nisi. Suspendisse tincidunt convallis erat, vel maximus nisl vehicula nec.","speakers":[{"name":"Diana Brock","image":"../image/Speaker5.png","booth":"Booth: 2F24"},{"name":"Yui Ronald","image":"../image/Speaker1.png","booth":"Booth: 2F12"},{"name":"Emma Satoshi","image":"../image/Speaker3.png","booth":"Booth: 2A35"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"},{"id":4,"time":"12:00 PM to 03:00 PM","content":"Morbi imperdiet ipsum felis, vel porta ante dictum sit amet. Nunc vitae risus at risus volutpat viverra.","speakers":[{"name":"Sasha Jackson","image":"../image/Speaker4.png","booth":"Booth: 2F18"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"},{"id":5,"time":"01:00 PM to 03:00 PM","content":"In lobortis consequat nibh, sit amet suscipit massa maximus eu. Quisque sagittis sed augue vel porta. Fusce euismod lectus in mauris ultrices, eget fermentum elit luctus. Etiam accumsan, eros ac porta interdum, nulla quam vulputate sapien, at faucibus nibh nisi posuere ex.","speakers":[{"name":"Bob John","image":"../image/Speaker2.png","booth":"Booth: 3G12"},{"name":"Sasha Jackson","image":"../image/Speaker4.png","booth":"Booth: 2F18"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"},{"id":6,"time":"01:00 PM to 03:00 PM","content":"Vestibulum vel eros vel metus lacinia feugiat a nec metus.","speakers":[{"name":"Bob John","image":"../image/Speaker2.png","booth":"Booth: 3G12"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"},{"id":7,"time":"12:00 PM to 03:00 PM","content":"Fusce lectus orci, sodales vel ante ac, tempus luctus sem. Nam vel dictum nisi, a semper velit. Pellentesque sodales eros in neque sollicitudin, et lacinia ex bibendum. Quisque vitae libero nisl.","speakers":[{"name":"Yui Ronald","image":"../image/Speaker1.png","booth":"Booth: 2F12"},{"name":"Sasha Jackson","image":"../image/Speaker4.png","booth":"Booth: 2F18"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"},{"id":8,"time":"11:00 AM to 12:00 PM","content":"Duis fermentum tincidunt urna, sit amet sollicitudin nisi.","speakers":[{"name":"Diana Brock","image":"../image/Speaker5.png","booth":"Booth: 2F24"}],"text":"Upcoming","icon":"../image/icon1.png","color":"--color-black"}]`;

  let _json = JSON.parse(table_json);
  let dv = ""
  // const [i, setI] = useState(0)
  // function speakers() {
  //   for (let i = 0 ; i < _json[props.row].speakers.length; i++)
  //   return <Speakers row={props.row} i={i}></Speakers>
  // }
  // console.log(ph1)
  return (
    <div className="day-date">
      <div>
        <p className="text">{_json[props.i].time}</p>
      </div>
      <div className='space'></div>
      <div>
        <h5>{_json[props.i].content}</h5>
      </div>
      <div className='space'></div>
      <div className="schedule__speaker">{[...Array(_json[props.row].speakers.length)].map((item, counter) => <Speakers key={counter} row={props.row} i={counter} />)}
      </div>

      <div className="schedule__logo">
        <span // style="color:var(${_json[i].color})"
        >
          <h5>{_json[props.i].text}</h5>
        </span>
        <img className="logo" src={_json[props.i].icon} />
      </div>
    </div>
  )
}
