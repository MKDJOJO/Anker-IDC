import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Anker IDC",
  description: "Anker IDC 工作指南",
  base: '/Anker-IDC/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '资料目录', link: '/markdown-examples' },
      { text: '更多资料', link: '/markdown-examples' },
      { text: '品牌规范', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '品牌目录',
        items: [
          { text: '资料目录', link: '/markdown-examples' },
          { text: '更多接口', link: '/api-examples' }
        ]
      },
      {
        text: '职业规划',
        items: [
          { text: '资料目录', link: '/markdown-examples' },
          { text: '更多接口', link: '/api-examples' }
        ]
      },
      {
        text: '业务组成',
        items: [
          { text: '资料目录', link: '/markdown-examples' },
          { text: '更多接口', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
