import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css'
import logo from '../img/logoHenry.png'

export default function Nav({onSearch}){
    return(
        <nav className={styles.flex}>
            <Link to='/'>
                <div className = {styles.left}>
                    <img src={logo} alt="LogoHenry"/>
                    <h4>Henry - Weather App</h4>
                </div>
            </Link>
            <Link to='/about'>
                <span className={styles.about}>About</span>
            </Link>
            <SearchBar
                onSearch={onSearch}
            />
        </nav>
    )
}