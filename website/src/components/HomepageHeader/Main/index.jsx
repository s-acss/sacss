import React from 'react';
import clsx from "clsx";
import Translate from '@docusaurus/Translate';
import styles from "./index.module.css";

function Main({className}) {
  return (
    <div className={clsx(className, styles.box)}>
      <h2 className="lh1 mb16"><Translate id="slogan" description="slogan">An utility-first CSS library for rapid UI
        development</Translate></h2>
      <p className="mb16">
        <Translate
          id="slogan.sub"
          description="slogan subtitle"
          values={{
            'strong': (<strong><Translate>命名规则</Translate></strong>)
          }}
        >
          {'自然拼读的{strong}是它与众不同的地方！'}
        </Translate>
      </p>
    </div>
  )
}

export default Main;
