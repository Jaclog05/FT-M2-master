import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  return (
    <div className={styles.component}>
      <div className={styles.titleAndButtonWrapper}>
        <Link to={`ciudad/${id}`}>
          <h2>{name}</h2>
        </Link>
        <button className={styles.button} onClick={onClose}>×</button>
      </div>
      <h4>Min: {min}°C</h4>
      <h4>Max: {max}°C</h4>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
    </div>
  )
};