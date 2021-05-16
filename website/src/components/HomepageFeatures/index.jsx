import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

const FeatureList = [
  {
    title: translate({
      'message': '原生',
      'description': 'Vanilla'
    }),
    description: translate({
      'message': '只需要引入一个 CSS 文件，即可使用大部分的功能，甚至并不需要任何的构建工具',
      'description': 'feature'
    }),
  },
  {
    title: translate({
      'message': '原子化',
      'description': 'Atomic CSS'
    }),
    description: translate({
      'message': '只需要专注在 HTML 就可以开发大部分网页样式',
      'description': 'Rapidly build modern websites without ever leaving your HTML.'
    }),
  },
  {
    title: translate({
      'message': '简单',
      'description': 'Easy'
    }),
    description: translate({
      'message': '我们没有发明庞大且让人迷惑的 class 名字，只有屈指可数的命名规则',
      'description': 'feature'
    }),
  },
  {
    title: translate({
      'message': '无依赖',
      'description': 'Framework-agnostic'
    }),
    description: translate({
      'message': '不依赖任何框架，唯一的依赖就是这套命名规则',
      'description': 'feature'
    }),
  },
  {
    title: translate({
      'message': '渐进增强',
      'description': 'Progressive'
    }),
    description: translate({
      'message': '我们提供了 SASS，LESS mixin 帮助你更快的创建自定义代码（可选的）',
      'description': 'feature'
    }),
  },
  {
    title: translate({
      'message': '更少，更快',
      'description': 'Less, Fast'
    }),
    description: translate({
      'message': '这套命名规则让你写的代码就已经是压缩状态，意味着你可以写更少的代码做更多的事',
      'description': 'feature'
    }),
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4 mb24')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <section className={clsx(styles.features, 'container')}>
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
