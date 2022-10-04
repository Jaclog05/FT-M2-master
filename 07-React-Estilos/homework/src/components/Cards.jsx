import React from 'react';
import Card from './Card.jsx'
import styles from './Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
      <div className={styles.component}>
        {cities.map((city, idx) => <Card
          name={city.name}
          max={city.main.temp_max}
          min={city.main.temp_min}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={idx}
        />)}
      </div>
  )
};