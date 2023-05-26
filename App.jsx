import React from 'react';
import hehe,{sub,div,mul}  from './Calc';
const a=Math.floor(Math.random()*100);
const b=Math.floor(Math.random()*100);

function App(){
    return(
   <>
  <ul>
  <li>sum of two no is {hehe(a,b)} </li>
  <li>sub of two no is {sub(a,b)} </li>
  <li>div of two no is {div(a,b)} </li>
  <li>mul of two no is {mul(a,b)} </li>
  </ul>
  </>
    );
}
export default App;