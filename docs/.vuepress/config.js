module.exports = {
    title: 'Hey UI',
    description: 'Hey UI 是基于微信小程序原生语法,实现的CSS UI框架,面向全层次的小程序开发者,低门槛开箱即用的前端 UI 解决方案',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: '介绍', link: '/' },
          { text: '入门', link: '/start/' },
          { text: '组件', link: '/component/basic/button/' },
          { text: '版本日志', link: '/update/' },
          /*{
            text: '语言',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/english' }
            ]
          },*/
          {
            text: '项目',
            items: [
              { text: '驾校预约', link: '/component/project/meet' },
              { text: '电商系统', link: '/component/project/shop' },
              { text: '个人博客', link: '/component/project/blog' },
            ]
          },
          { text: 'Github', link: 'https://github.com/GeekxzOrg' },
        ],
        sidebar: {
            '/start/': [
               {
                    title: '入门',
                    collapsable: false,
                    children: [
                        { title: '快速开始', path: '/start/' },
                        { title: '常见问题', path: '/start/QA' },
                        { title: '更换主题', path: '/start/themes' },
                        { title: '贡献指南', path: '/start/contribute' },
                    ]
                },
            ],
            
            '/component/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        { title: '图标 Icon', path: '/component/basic/icon' },
                        { title: '颜色 color', path: '/component/basic/color' },
                        { title: '内外边距 Margin-Padding', path: '/component/basic/margin-padding' },
                        { title: '边角 Corner', path: '/component/basic/corner' },
                        { title: '文本 Text', path: '/component/basic/text' },
                        { title: '边框 Shadow', path: '/component/basic/shadow' },
                        { title: '线条 Line', path: '/component/basic/line' },
                        { title: '按钮 Button', path: '/component/basic/button' },
                    ]
                },
                {
                    title: '动画',
                    collapsable: false,
                    children: [
                        { title: '过渡 Transition', path: '/component/animation/transition' },
                    ]
                },
                {
                    title: '表单',
                    collapsable: false,
                    children: [
                        { title: '输入框 Input', path: '/component/form/input' },
                        { title: '文本域 Textarea', path: '/component/form/textarea' },
                        { title: '单项选择器 Radio', path: '/component/form/radio' },
                        { title: '复选框组件 Checkbox', path: '/component/form/checkbox' },
                        { title: '图片选择器 ImagePicker', path: '/component/form/image-picker' },
                        { title: '图片裁剪 ImageClipper', path: '/component/form/image-clipper' },
                    ]
                },
                {
                    title: '导航',
                    collapsable: false,
                    children: [
                        { title: '选项卡 Segment', path: '/component/nav/segment' },
                    ]
                },
                {
                    title: '布局',
                    collapsable: false,
                    children: [
                        { title: '弹性 Flex', path: '/component/layout/flex' },
                        { title: '栅格 Grid', path: '/component/layout/grid' },
                        { title: '列表 List', path: '/component/layout/list' },
                        { title: '卡片 Card', path: '/component/layout/card' },
                        { title: '瀑布流 WaterFlow', path: '/component/layout/water-flow' },
                        { title: '折叠面板 Collapse', path: '/component/layout/collapse' },
                    ]
                },
                {
                    title: '视图',
                    collapsable: false,
                    children: [
                        { title: '头像 Avatar', path: '/component/view/avatar' },
                        { title: '加载中 Loading', path: '/component/view/loading' },
                        { title: '进度条 Progress', path: '/component/view/progress' },
                        { title: '弹出层 Popup', path: '/component/view/popup' },
                        { title: '步骤条 Steps', path: '/component/view/steps' },
                        { title: '通告栏 NoticeBar', path: '/component/view/notice-bar' },
                        { title: '遮罩层 Mask', path: '/component/view/msak' },
                    ]
                },
                {
                    title: '操作反馈',
                    collapsable: false,
                    children: [
                        { title: '轻提示 Toast', path: '/component/response/toast' },
                        { title: '模态框 Dialog', path: '/component/response/dialog' },
                        { title: '消息提示 Message', path: '/component/response/message' },
                        { title: '滑动菜单 SlideView', path: '/component/response/slide-view' },
                    ]
                },
                {
                    title: '扩展',
                    collapsable: false,
                    children: [
                        { title: '测试 plugin', path: '/component/plugin/aa' },
                    ]
                }
            ]
        }
    }
}