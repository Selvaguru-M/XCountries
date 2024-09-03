import React from "react";
import styles from "./Card.module.css";

export default function Card(data){
    const {name,flag, abbr} =  data.data;
    console.log('data',Array.isArray(data),data.data,flag);
    return (
        <div className={styles.card}>
              <img src={flag} alt={name} />
              <p>{name}</p>
              </div>
    );
}