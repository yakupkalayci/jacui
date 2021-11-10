import React from 'react'
import styles from './styles.module.css'

export const MyButton = ( {type, text} ) => {
  return <button className={styles[type]}>{text}</button>
}
