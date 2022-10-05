import React from 'react';
import Card from './Card.jsx'
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities)
  return (
      <div className={styles.component}>
        {cities.length ? cities.map((city, idx) => <Card
          name={city.name}
          max={city.max}
          min={city.min}
          img={city.img}
          onClose={() => onClose(city.id)}
          key={idx}
        />) : <h2>No se recibieron ciudades aún</h2>}
      </div>
  )
};