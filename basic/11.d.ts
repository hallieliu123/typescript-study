//类型描述文件或类型注解文件 *.d.ts

//声明全局变量
// declare var $: (param: () => void) => void;

//声明全局函数 & 函数重载
// interface Jq {
//   html: (param: string) => {};
// }
// declare function $(param: () => void): void;
// declare function $(param: string): Jq;
// 对对象及类进行定义,及命名空间的嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

//使用interface,实现函数重载
// interface Jquery {
//   (param: () => void): void,
//   (param: string): Jq,
// }
// declare var $: Jquery;


////es6 commonjs模块化使用类型描述文件
// declare module 'jquery' {
//   function $(param: () => void): void;
//   function $(param: string): Jq;
//   interface Jq {
//     html: (param: string) => {};
//   }
//   namespace $ {
//     namespace fn {
//       class init {}
//     }
//   }
//   export = $;
// }
