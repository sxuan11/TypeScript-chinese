let str = `
  * [5分钟了解TypeScript](tutorials/typescript-in-5-minutes.md)
  * [ASP.NET Core](tutorials/asp.net-core.md)
  * [ASP.NET 4](tutorials/asp.net-4.md)
  * [Gulp](tutorials/gulp.md)
  * [Knockout.js](tutorials/knockout.md)
  * [React与webpack](tutorials/react-and-webpack.md)
  * [React](tutorials/react.md)
  * [Angular 2](tutorials/angular-2.md)
  * [从JavaScript迁移到TypeScript](tutorials/migrating-from-javascript.md)
  `

let dd = `## typescript 中文手册
该项目是基于[github](https://github.com/zhongsp/TypeScript) 上翻译的手册进行搭建的
`
const a = str.split('*');
let result = [];
for (let i = 0; i < a.length; i++) {
  const c = a[i].trim().split(']');
  let b = []
  try {
    b.push(c[1].substr(1).substr(0,c[1].length-2))
    b.push(c[0].substr(1))
    result.push(b);
  } catch (e){

  }
}

console.log(result);
