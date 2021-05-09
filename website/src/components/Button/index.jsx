import React from 'react';
import styles from "./index.module.css";
import clsx from "clsx";

function Button({Component = 'button', className, ...rest}) {
  return (
    <Component className={clsx(className, styles.btn)} {...rest}/>
  )
}

export default Button;
