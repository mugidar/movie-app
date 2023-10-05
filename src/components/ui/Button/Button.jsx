import React from 'react'
import styles from "./Button.module.css"
import { twMerge } from 'tailwind-merge'
const Button = ({children, className}) => {
  return (
    <button className={twMerge(styles.button, className)}>{children}</button>
  )
}

export default Button