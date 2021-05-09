import React from 'react';
import clsx from "clsx";
import styles from "./index.module.css";
import Pre from "../../Pre";

const code = `<div class="bc_fff pt16 pb16 pl16 pr16 dif br8">
  <img class="mr8 w48 h48" src="./logo.svg"/>
  <dl class="f1 fs14 c_000">
    <dt class="fw700 fs16">SACSS</dt>
    <dd>Static Atomic CSS</dd>
  </dl>
</div>`;

function Demo({className}) {
  return (
    <div className={clsx(className, styles.box, 'oh pr')}>
      <div className="bc_000 pt16 pb16 pl16 pr16 df aic jcc">
        <div className="bc_fff pt16 pb16 pl16 pr16 dif br8">
          <img className="mr8 w48 h48" src="../../../../static/img/logo.svg"/>
          <dl className="f1 fs14 c_000">
            <dt className="fw700 fs16">SACSS</dt>
            <dd>Static Atomic CSS</dd>
          </dl>
        </div>
      </div>
      <Pre code={code} lang="html"/>
    </div>
  )
}

export default Demo;
