import React from 'react';
import clsx from "clsx";
import Translate from '@docusaurus/Translate';
import styles from "./index.module.css";

function Main({className}) {
  return (
    <div className={clsx(className, styles.box)}>
      <h2 className="lh1 mb16">
        <Translate id="slogan" description="slogan">
          Create Utility First CSS library for your project faster and easier.
        </Translate>
      </h2>
      <p className="mb16">
        <Translate
          id="slogan.sub"
          description="slogan subtitle"
          values={{
            'strong': (<strong><Translate>命名</Translate></strong>)
          }}
        >
          {'{strong}是 CSS 中最难的问题没有之一!'}
        </Translate>
      </p>
    </div>
  )
}

export default Main;
