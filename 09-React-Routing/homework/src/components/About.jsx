import React from "react";
import styles from './About.module.css'

export default function About(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.about}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum alias, dolores incidunt veniam, ducimus ab rerum exercitationem
                explicabo molestiae, aut magni sint! Iure similique fugiat accusantium
                accusamus praesentium? Natus, vero.</p>
            </div>
        </div>
    )
}