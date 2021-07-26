# TypeScript

[![Build Status](https://travis-ci.org/zhongsp/TypeScript.svg?branch=master)](https://travis-ci.org/zhongsp/TypeScript) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

🏮 祝所有开发者：牛年大吉！🏮

<img src="./misc/ts_logo.jpg" alt="TypeScript" width="24px" height="24px" style="vertical-align: bottom;">  [TypeScript 4.3 (May 26, 2021)](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/)
|
[版本发布说明](release-notes/typescript-4.3.md)

:heavy_check_mark: TypeScript语言用于大规模应用的JavaScript开发。  :heavy_check_mark: TypeScript支持类型，是JavaScript的超集且可以编译成纯JavaScript代码。  :heavy_check_mark: TypeScript兼容所有浏览器，所有宿主环境，所有操作系统。  :heavy_check_mark: TypeScript是开源的。

:new::new::new:

<a href="https://github.com/zhongsp/TypeScript/issues/310"><img src="./misc/ts-intro.png" alt="TypeScript入门与实战" width="200px" height="200px" style="vertical-align: bottom;"></a>  `ISBN 9787111669722`

各位朋友们，本人近期出版了[《TypeScript入门与实战》](https://github.com/zhongsp/TypeScript/issues/310)一书。在该书中，尝试着尽可能完整地介绍TypeScript语言的基础知识，并结合了一些本人的使用经验和体会。它主要面向的是TypeScript语言的初级和中级使用者。

本人还处于TypeScript语言的学习阶段，可能存在理解错误的地方，还请大家指正，一起进步。此外，由于这是本人人生中出版的第一本书，难免会有纰漏，请大家多多包涵！

<img src="./misc/reward.jpg" alt="Reward the Author" width="200px" height="200px" style="vertical-align: bottom;">

如果觉得不错可以微信打赏哟 <3

## 目录

* [快速上手](tutorials/README.md)
  * [5分钟了解TypeScript](tutorials/typescript-in-5-minutes.md)
  * [ASP.NET Core](tutorials/asp.net-core.md)
  * [ASP.NET 4](tutorials/asp.net-4.md)
  * [Gulp](tutorials/gulp.md)
  * [Knockout.js](tutorials/knockout.md)
  * [React与webpack](tutorials/react-and-webpack.md)
  * [React](tutorials/react.md)
  * [Angular 2](tutorials/angular-2.md)
  * [从JavaScript迁移到TypeScript](tutorials/migrating-from-javascript.md)
* [手册](handbook/README.md)
  * [基础类型](handbook/basic-types.md)
  * [接口](handbook/interfaces.md)
  * [函数](handbook/functions.md)
  * [字面量类型](handbook/literal-types.md)
  * _@todo 联合类型和交叉类型_
  * [类](handbook/classes.md)
  * [枚举](handbook/enums.md)
  * [泛型](handbook/generics.md)
* [手册（进阶）](reference/README.md)
  * [高级类型](reference/advanced-types.md)
  * [实用工具类型](reference/utility-types.md)
  * [Decorators](reference/decorators.md)
  * [声明合并](reference/declaration-merging.md)
  * [Iterators 和 Generators](reference/iterators-and-generators.md)
  * [JSX](reference/jsx.md)
  * [混入](reference/mixins.md)
  * [模块](reference/modules.md)
  * [模块解析](reference/module-resolution.md)
  * [命名空间](reference/namespaces.md)
  * [命名空间和模块](reference/namespaces-and-modules.md)
  * [Symbols](reference/symbols.md)
  * [三斜线指令](reference/triple-slash-directives.md)
  * [类型兼容性](reference/type-compatibility.md)
  * [类型推论](reference/type-inference.md)
  * [变量声明](reference/variable-declarations.md)
* 手册（v2）
  * [模版字面量类型](handbook-v2/type-manipulation/template-literal-types.md)
* [如何书写声明文件](declaration-files/README.md)
  * [介绍](declaration-files/introduction.md)
  * [举例](declaration-files/by-example.md)
  * [库结构](declaration-files/library-structures.md)
  * [模板](declaration-files/templates.md)
  * [最佳实践](declaration-files/do-s-and-don-ts.md)
  * [深入](declaration-files/deep-dive.md)
  * [发布](declaration-files/publishing.md)
  * [使用](declaration-files/consumption.md)
* JavaScript
  * [JavaScript文件里的类型检查](javascript/type-checking-javascript-files.md)
* [工程配置](project-config/README.md)
  * [tsconfig.json](project-config/tsconfig.json.md)
  * [工程引用](project-config/project-references.md)
  * [NPM包的类型](project-config/typings-for-npm-packages.md)
  * [编译选项](project-config/compiler-options.md)
  * [配置 Watch](project-config/configuring-watch.md)
  * [在MSBuild里使用编译选项](project-config/compiler-options-in-msbuild.md)
  * [与其它构建工具整合](project-config/integrating-with-build-tools.md)
  * [使用TypeScript的每日构建版本](project-config/nightly-builds.md)
* [Wiki](wiki/README.md)
  * [TypeScript里的this](wiki/this-in-typescript.md)
  * [编码规范](wiki/coding_guidelines.md)
  * [常见编译错误](wiki/common-errors.md)
  * [支持TypeScript的编辑器](wiki/typescript-editor-support.md)
  * [结合ASP.NET v5使用TypeScript](wiki/using-typescript-with-asp.net-5.md)
  * [架构概述](wiki/architectural-overview.md)
  * [发展路线图](wiki/roadmap.md)
* [新增功能](release-notes/README.md)
  * [TypeScript 4.3](release-notes/typescript-4.3.md)
  * [TypeScript 4.2](release-notes/typescript-4.2.md)
  * [TypeScript 4.1](release-notes/typescript-4.1.md)
  * [TypeScript 4.0](release-notes/typescript-4.0.md)
  * [TypeScript 3.9](release-notes/typescript-3.9.md)
  * [TypeScript 3.8](release-notes/typescript-3.8.md)
  * [TypeScript 3.7](release-notes/typescript-3.7.md)
  * [TypeScript 3.6](release-notes/typescript-3.6.md)
  * [TypeScript 3.5](release-notes/typescript-3.5.md)
  * [TypeScript 3.4](release-notes/typescript-3.4.md)
  * [TypeScript 3.3](release-notes/typescript-3.3.md)
  * [TypeScript 3.2](release-notes/typescript-3.2.md)
  * [TypeScript 3.1](release-notes/typescript-3.1.md)
  * [TypeScript 3.0](release-notes/typescript-3.0.md)
  * [TypeScript 2.9](release-notes/typescript-2.9.md)
  * [TypeScript 2.8](release-notes/typescript-2.8.md)
  * [TypeScript 2.7](release-notes/typescript-2.7.md)
  * [TypeScript 2.6](release-notes/typescript-2.6.md)
  * [TypeScript 2.5](release-notes/typescript-2.5.md)
  * [TypeScript 2.4](release-notes/typescript-2.4.md)
  * [TypeScript 2.3](release-notes/typescript-2.3.md)
  * [TypeScript 2.2](release-notes/typescript-2.2.md)
  * [TypeScript 2.1](release-notes/typescript-2.1.md)
  * [TypeScript 2.0](release-notes/typescript-2.0.md)
  * [TypeScript 1.8](release-notes/typescript-1.8.md)
  * [TypeScript 1.7](release-notes/typescript-1.7.md)
  * [TypeScript 1.6](release-notes/typescript-1.6.md)
  * [TypeScript 1.5](release-notes/typescript-1.5.md)
  * [TypeScript 1.4](release-notes/typescript-1.4.md)
  * [TypeScript 1.3](release-notes/typescript-1.3.md)
  * [TypeScript 1.1](release-notes/typescript-1.1.md)
* [Breaking Changes](breaking-changes/README.md)
  * [TypeScript 3.6](breaking-changes/typescript-3.6.md)
  * [TypeScript 3.5](breaking-changes/typescript-3.5.md)
  * [TypeScript 3.4](breaking-changes/typescript-3.4.md)
  * [TypeScript 3.2](breaking-changes/typescript-3.2.md)
  * [TypeScript 3.1](breaking-changes/typescript-3.1.md)
  * [TypeScript 3.0](breaking-changes/typescript-3.0.md)
  * [TypeScript 2.9](breaking-changes/typescript-2.9.md)
  * [TypeScript 2.8](breaking-changes/typescript-2.8.md)
  * [TypeScript 2.7](breaking-changes/typescript-2.7.md)
  * [TypeScript 2.6](breaking-changes/typescript-2.6.md)
  * [TypeScript 2.4](breaking-changes/typescript-2.4.md)
  * [TypeScript 2.3](breaking-changes/typescript-2.3.md)
  * [TypeScript 2.2](breaking-changes/typescript-2.2.md)
  * [TypeScript 2.1](breaking-changes/typescript-2.1.md)
  * [TypeScript 2.0](breaking-changes/typescript-2.0.md)
  * [TypeScript 1.8](breaking-changes/typescript-1.8.md)
  * [TypeScript 1.7](breaking-changes/typescript-1.7.md)
  * [TypeScript 1.6](breaking-changes/typescript-1.6.md)
  * [TypeScript 1.5](breaking-changes/typescript-1.5.md)
  * [TypeScript 1.4](breaking-changes/typescript-1.4.md)

**TypeScript手册官方英文版**

* [TypeScript手册（英文版）](http://www.typescriptlang.org/docs/home.html)

**TypeScript语言规范**

* [TypeScript语言规范](https://github.com/microsoft/TypeScript/blob/master/doc/spec-ARCHIVED.md)

期待你为翻译做出贡献:)
