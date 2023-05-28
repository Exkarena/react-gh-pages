import React, { useEffect } from 'react'
import '../style.css';

import photo1 from '../image/test1.png';
import photo2 from '../image/test2.png';
import photo3 from '../image/test3.png';


function AppTest() {
useEffect=(()=>{
//   let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
// xhr.responseType='json'
// xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
// xhr.onLoad = () => {
//   console.log(xhr.response);
// }

// xhr.send();

function f(){
  let pic = document.getElementById('d1')

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response =>{console.log(response)
  return response.json()
})
.then(response =>{
  console.log(response.sprites)
  for(let key in response.sprites)
    if(typeof response.sprites[key] === 'string'){
      const img = document.createElement('img');
      img.setAttribute('src', response.sprites[key])
      pic.append(img)
    }
  pic.setAttribute('src', response.sprites.back_default)
  },[])

}
})

  return (
   <div>
    f();
   </div>
  );
}

export default AppTest;
