import React from 'react';
import 'sacss/index.css';
import Layout from '@theme/Layout';
import DLink from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import HomepageFeatures from '../components/HomepageFeatures';
import Main from "../components/Main";
import Demo from "../components/Demo";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout
      description={
        translate({
          message: '描述',
          description: '在 meta 标签中的描述'
        })
      }
    >
      <header className="pt32 container">
        <div className="row mb16">
          <div className="col col--7 mb16">
            <Main />
          </div>
          <div className="col col--5 mb16">
            <Demo />
          </div>
        </div>
        <div className="tac mt16 mb16">
          <div className="tac mb16 fs40 fw700">
            React &nbsp; | &nbsp;  VUE &nbsp; | &nbsp;  Svelte  &nbsp; | &nbsp;  React Native &nbsp; | &nbsp;  CSS &nbsp; | &nbsp;  Figma &nbsp; | &nbsp; ...
          </div>
          <Button Component={DLink} to="/docs/intro.about">
            <Translate id="start.button" description="开始">
              开始
            </Translate>
          </Button>
        </div>
      </header>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
