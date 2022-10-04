import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input className={styles.input} type="text" />
      <button className={styles.button} onClick={() => onSearch(document.querySelector('input').value)}>Agregar</button>
    </div>
  )
};