/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SACSS',
  tagline: 'Dinosaurs are cool',
  url: 'https://ziven27.github.io',
  baseUrl: '/sacss/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ziven27', // Usually your GitHub org/user name.
  projectName: 'sacss', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'SACSS',
      logo: {
        alt: 'SACSS',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'Docs',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'right'
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/sacss',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/ziven27/sacss',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SACSS, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          include: ['**/*.md', '**/*.mdx'], // Extensions to include.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ziven27/sacss/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:'https://github.com/ziven27/sacss/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
