import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
//preferably dont use standard attribute names in props otherwise it will be treated as prop's property 



ReactDOM.render(
  <>
  <h1 className='heading_style'>Top 5 Netflix Series of all time</h1>
  {Sdata.map((val,index)=>{
      console.log(index);
      console.log(val);
     return(
    <Card sname={val.sname}
    imgsrc={val.imgsrc}
    title={val.title}
    links={val.links}/>
  );
  })}
  </>,
  document.getElementById('root')
);
