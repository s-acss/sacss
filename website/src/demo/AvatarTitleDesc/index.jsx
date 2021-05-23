import React from 'react';
import clsx from "clsx";
import useBaseUrl from '@docusaurus/useBaseUrl';
import style from "./index.module.css";

export default function Home() {
  return (
    <div className={clsx(style.box,"pt24 pb24 pr24 pl24 mla mra")}>
      <div className="bc_fff tac pt24 pb24 pl24 pr24 br8">
        <img className="w128 h128 br100% db mla mra mb24" src={useBaseUrl('/img/avatar.jpg')}
             alt="avatar" width="128" height="128"/>
        <div className="mb16 fs18 fw700 lh28 c_m">
          <p className="mb8">Tailwind CSS is the only framework that I've seen scale on large teams.</p>
          <p>It’s easy to customize, adapts to any design, and the build size is tiny.</p>
        </div>
        <div className="fs16 lh24">
          <em className="db c_info fsn fw500">Sarah Dayan</em>
          <strong className="db c_s fw500">Staff Engineer, Algolia</strong>
        </div>
      </div>
    </div>
  );
}
