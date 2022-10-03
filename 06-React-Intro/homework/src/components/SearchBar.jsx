import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  
  return (
    <div>
      <button onClick={() => onSearch("Denver")}>Agregar</button>
    </div>
  )
};