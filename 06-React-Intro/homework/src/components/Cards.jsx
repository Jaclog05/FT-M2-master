import React from 'react';
import Card from './Card.jsx'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities)
  return (
      <div>
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