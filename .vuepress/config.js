module.exports = {
  title: "TypeScriptBook",
  description: 'a chinese TypeScriptBook',
  dest: 'public',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/', icon: 'reco-home'},
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [
          {text: 'TypeScript', link: '/docs/TypeScript/'}
        ]
      }
    ],
    subSidebar: 'auto',
    sidebar: {
      '/docs/TypeScript/': [
        {
          title: '快速上手',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            [ 'tutorials/typescript-in-5-minutes.md', '5分钟了解TypeScript' ],
            [ 'tutorials/asp.net-core.md', 'ASP.NET Core' ],
            [ 'tutorials/asp.net-4.md', 'ASP.NET 4' ],
            [ 'tutorials/gulp.md', 'Gulp' ],
            [ 'tutorials/knockout.md', 'Knockout.js' ],
            [ 'tutorials/react-and-webpack.md', 'React与webpack' ],
            [ 'tutorials/react.md', 'React' ],
            [ 'tutorials/angular-2.md', 'Angular 2' ],
            [
              'tutorials/migrating-from-javascript.md',
              '从JavaScript迁移到TypeScript'
            ]
          ]
        },
        {
          title: '手册',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            [ 'handbook/basic-types.md', '基础类型' ],
            [ 'handbook/interfaces.md', '接口' ],
            [ 'handbook/functions.md', '函数' ],
            [ 'handbook/literal-types.md', '字面量类型' ],
            [ 'handbook/classes.md', '类' ],
            [ 'handbook/enums.md', '枚举' ],
            [ 'handbook/generics.md', '泛型' ]
          ]
        },
        {
          title: '手册（进阶）',
          collapsable: false,
          children: [
            [ 'reference/advanced-types.md', '高级类型' ],
            [ 'reference/utility-types.md', '实用工具类型' ],
            [ 'reference/decorators.md', 'Decorators' ],
            [ 'reference/declaration-merging.md', '声明合并' ],
            [
              'reference/iterators-and-generators.md',
              'Iterators 和 Generators'
            ],
            [ 'reference/jsx.md', 'JSX' ],
            [ 'reference/mixins.md', '混入' ],
            [ 'reference/modules.md', '模块' ],
            [ 'reference/module-resolution.md', '模块解析' ],
            [ 'reference/namespaces.md', '命名空间' ],
            [ 'reference/namespaces-and-modules.md', '命名空间和模块' ],
            [ 'reference/symbols.md', 'Symbols' ],
            [ 'reference/triple-slash-directives.md', '三斜线指令' ],
            [ 'reference/type-compatibility.md', '类型兼容性' ],
            [ 'reference/type-inference.md', '类型推论' ],
            [ 'reference/variable-declarations.md', '变量声明' ]

          ]
        },
        {
          title: '手册（v2）',
          collapsable: false,
          children: [
            [
              'handbook-v2/type-manipulation/template-literal-types.md',
              '模版字面量类型'
            ]
          ]
        },
        {
          title: '如何书写声明文件',
          collapsable: false,
          children: [
            [ 'declaration-files/introduction.md', '介绍' ],
            [ 'declaration-files/by-example.md', '举例' ],
            [ 'declaration-files/library-structures.md', '库结构' ],
            [ 'declaration-files/templates.md', '模板' ],
            [ 'declaration-files/do-s-and-don-ts.md', '最佳实践' ],
            [ 'declaration-files/deep-dive.md', '深入' ],
            [ 'declaration-files/publishing.md', '发布' ],
            [ 'declaration-files/consumption.md', '使用' ]
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            [
              'javascript/type-checking-javascript-files.md',
              'JavaScript文件里的类型检查'
            ]
          ]
        },
        {
          title: '工程配置',
          collapsable: false,
          children: [
            [ 'project-config/tsconfig.json.md', 'tsconfig.json' ],
            [ 'project-config/project-references.md', '工程引用' ],
            [ 'project-config/compiler-options.md', '编译选项' ],
            [ 'project-config/configuring-watch.md', '配置 Watch' ],
            [
              'project-config/compiler-options-in-msbuild.md',
              '在MSBuild里使用编译选项'
            ],
            [ 'project-config/integrating-with-build-tools.md', '与其它构建工具整合' ],
            [ 'project-config/nightly-builds.md', '使用TypeScript的每日构建版本' ]
          ]
        },
        {
          title: 'Wiki',
          collapsable: false,
          children: [
            [ 'wiki/this-in-typescript.md', 'TypeScript里的this' ],
            [ 'wiki/coding_guidelines.md', '编码规范' ],
            [ 'wiki/common-errors.md', '常见编译错误' ],
            [ 'wiki/typescript-editor-support.md', '支持TypeScript的编辑器' ],
            [
              'wiki/using-typescript-with-asp.net-5.md',
              '结合ASP.NET v5使用TypeScript'
            ],
            [ 'wiki/architectural-overview.md', '架构概述' ],
            [ 'wiki/roadmap.md', '发展路线图' ]
          ]
        },
        {
          title: '新增功能',
          collapsable: false,
          children: [
            [ 'release-notes/typescript-4.3.md', 'TypeScript 4.3' ],
            [ 'release-notes/typescript-4.2.md', 'TypeScript 4.2' ],
            [ 'release-notes/typescript-4.1.md', 'TypeScript 4.1' ],
            [ 'release-notes/typescript-4.0.md', 'TypeScript 4.0' ],
            [ 'release-notes/typescript-3.9.md', 'TypeScript 3.9' ],
            [ 'release-notes/typescript-3.8.md', 'TypeScript 3.8' ],
            [ 'release-notes/typescript-3.7.md', 'TypeScript 3.7' ],
            [ 'release-notes/typescript-3.6.md', 'TypeScript 3.6' ],
            [ 'release-notes/typescript-3.5.md', 'TypeScript 3.5' ],
            [ 'release-notes/typescript-3.4.md', 'TypeScript 3.4' ],
            [ 'release-notes/typescript-3.3.md', 'TypeScript 3.3' ],
            [ 'release-notes/typescript-3.2.md', 'TypeScript 3.2' ],
            [ 'release-notes/typescript-3.1.md', 'TypeScript 3.1' ],
            [ 'release-notes/typescript-3.0.md', 'TypeScript 3.0' ],
            [ 'release-notes/typescript-2.9.md', 'TypeScript 2.9' ],
            [ 'release-notes/typescript-2.8.md', 'TypeScript 2.8' ],
            [ 'release-notes/typescript-2.7.md', 'TypeScript 2.7' ],
            [ 'release-notes/typescript-2.6.md', 'TypeScript 2.6' ],
            [ 'release-notes/typescript-2.5.md', 'TypeScript 2.5' ],
            [ 'release-notes/typescript-2.4.md', 'TypeScript 2.4' ],
            [ 'release-notes/typescript-2.3.md', 'TypeScript 2.3' ],
            [ 'release-notes/typescript-2.2.md', 'TypeScript 2.2' ],
            [ 'release-notes/typescript-2.1.md', 'TypeScript 2.1' ],
            [ 'release-notes/typescript-2.0.md', 'TypeScript 2.0' ],
            [ 'release-notes/typescript-1.8.md', 'TypeScript 1.8' ],
            [ 'release-notes/typescript-1.7.md', 'TypeScript 1.7' ],
            [ 'release-notes/typescript-1.6.md', 'TypeScript 1.6' ],
            [ 'release-notes/typescript-1.5.md', 'TypeScript 1.5' ],
            [ 'release-notes/typescript-1.4.md', 'TypeScript 1.4' ],
            [ 'release-notes/typescript-1.3.md', 'TypeScript 1.3' ],
            [ 'release-notes/typescript-1.1.md', 'TypeScript 1.1' ]
          ]
        },
        {
          title: '重大变化',
          collapsable: false,
          children: [
            [ 'breaking-changes/typescript-3.6.md', 'TypeScript 3.6' ],
            [ 'breaking-changes/typescript-3.5.md', 'TypeScript 3.5' ],
            [ 'breaking-changes/typescript-3.4.md', 'TypeScript 3.4' ],
            [ 'breaking-changes/typescript-3.2.md', 'TypeScript 3.2' ],
            [ 'breaking-changes/typescript-3.1.md', 'TypeScript 3.1' ],
            [ 'breaking-changes/typescript-3.0.md', 'TypeScript 3.0' ],
            [ 'breaking-changes/typescript-2.9.md', 'TypeScript 2.9' ],
            [ 'breaking-changes/typescript-2.8.md', 'TypeScript 2.8' ],
            [ 'breaking-changes/typescript-2.7.md', 'TypeScript 2.7' ],
            [ 'breaking-changes/typescript-2.6.md', 'TypeScript 2.6' ],
            [ 'breaking-changes/typescript-2.4.md', 'TypeScript 2.4' ],
            [ 'breaking-changes/typescript-2.3.md', 'TypeScript 2.3' ],
            [ 'breaking-changes/typescript-2.2.md', 'TypeScript 2.2' ],
            [ 'breaking-changes/typescript-2.1.md', 'TypeScript 2.1' ],
            [ 'breaking-changes/typescript-2.0.md', 'TypeScript 2.0' ],
            [ 'breaking-changes/typescript-1.8.md', 'TypeScript 1.8' ],
            [ 'breaking-changes/typescript-1.7.md', 'TypeScript 1.7' ],
            [ 'breaking-changes/typescript-1.6.md', 'TypeScript 1.6' ],
            [ 'breaking-changes/typescript-1.5.md', 'TypeScript 1.5' ],
            [ 'breaking-changes/typescript-1.4.md', 'TypeScript 1.4' ]
          ]
        },
      ]
    },
    type: 'blog',
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // // 作者
    // author: 'sxuan',
    // 作者头像
    authorAvatar: '/logo.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2021'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}
