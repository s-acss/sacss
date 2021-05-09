import React from 'react';
import clsx from "clsx";
import styles from "./index.module.css";

function Main({className}) {
  return (
    <div className={clsx(className, styles.box)}>
      <h2 className="lh1 mb16">An utility-first CSS library for rapid UI development</h2>
      <p>Attempt to solve the same problems like <a href="https://tailwindcss.com/" rel="nofollow">tailwindcss</a> in <a href="https://acss.io/" rel="nofollow">Atomic css</a> way.</p>
    </div>
  )
}

export default Main;
