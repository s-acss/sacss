import React from 'react';
import clsx from "clsx";
import DLink from '@docusaurus/Link';
import styles from "./index.module.css";
import Main from "./Main";
import Demo from "./Demo";
import Button from "../Button";
import Translate from '@docusaurus/Translate';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('container', styles.box)}>
      <div className="row mb16">
        <div className="col col--7 mb16"><Main /></div>
        <div className="col col--5 mb16"><Demo /></div>
      </div>
      <div className="tac mt16 mb16">
        <Button Component={DLink} to="https://github.com/ziven27/sacss">
          <Translate id="start.button" description="开始按钮">GitHub</Translate>
        </Button>
      </div>
    </header>
  );
}
export default HomepageHeader;
