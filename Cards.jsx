import React from 'react';

function Card(props){
    return(
        <>
        <div className="cards">
       <div className="card">
       <img src={props.imgsrc} alt="myPic" className="card__img" />
       <div className="card__info">
       <h3 className="card__category">{props.title}</h3>
       <h3 className='card__title'>{props.sname}</h3>
       <a href={props.links} target="_blank"><button> Watch Now </button></a>
       </div>
       </div>
       </div> 
       
       </>
      );
}
export default Card;