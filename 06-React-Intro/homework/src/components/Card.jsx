import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código

  return (
    <div>
      <h2>{name}</h2>
      <h4>Min: {min}</h4>
      <h4>Max: {max}</h4>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
      <button onClick={onClose}>X</button>
    </div>
  )
};