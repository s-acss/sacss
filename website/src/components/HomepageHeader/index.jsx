import React from 'react';
import clsx from "clsx";
import styles from "./index.module.css";
import Main from "./Main";
import Demo from "./Demo";
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('df', styles.box)}>
      <Main className="f1 mr16" />
      <Demo />
    </header>
  );
}
export default HomepageHeader;
