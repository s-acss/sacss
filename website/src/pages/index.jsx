import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHeader from "../components/HomepageHeader";
import {translate} from '@docusaurus/Translate';
import 'sacss/index.css';

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
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
