import React, {useState} from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código

  let [city, setCity] = useState("")

  function handleChange(e){
    setCity(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className={styles.input}
        type="text"
        placeholder="Ciudad..."
        onChange={handleChange}
      />
      <input className={styles.button} type="submit" value="Agregar" />
    </form>
  );
};