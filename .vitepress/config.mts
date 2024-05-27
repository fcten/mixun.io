import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mixun",
  description: "Discover the Beauty of the World",
  themeConfig: {
    logo: '/images/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fcten/mixun' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn',
      themeConfig: {
        logo: {
          light: '/images/logo.light.svg',
          dark: '/images/logo.dark.svg',
          alt:  '觅寻'
        },
        siteTitle: false,
        nav: [
          { text: '主页', link: '/zh-cn/' },
          { text: '示例', link: '/zh-cn/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown Examples', link: '/zh-cn/markdown-examples' },
              { text: 'Runtime API Examples', link: '/zh-cn/api-examples' }
            ]
          }
        ]
      }
    }
  }
})
