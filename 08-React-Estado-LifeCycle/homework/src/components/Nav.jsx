import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css'
import logo from '../logoHenry.png'

export default function Nav({onSearch}){
    return(
        <nav className={styles.flex}>
            <div className = {styles.left}>
                <img src={logo} alt="LogoHenry"/>
                <h4>Henry - Weather App</h4>
            </div>
            <SearchBar
                onSearch={onSearch}
            />
        </nav>
    )
}