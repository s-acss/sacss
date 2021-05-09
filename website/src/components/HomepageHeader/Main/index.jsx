import React from 'react';
import clsx from "clsx";
import styles from "./index.module.css";

import Button from "../../Button";

function Main({className}) {
  return (
    <div className={clsx(className, styles.box)}>
      <h2 className="lh1 mb16">An utility-first CSS library for rapid UI development</h2>
      <p className="mb16">Strict class naming rules are easy to understand and expand.</p>
    </div>
  )
}

export default Main;
