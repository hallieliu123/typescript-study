//namespace 命名空间提供一个类模块化的作用
namespace Home {
  class Header{}
  class Content{}
  class Footer{}
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
//Home会自动存在于全局变量中,export使得Page作为了Home的属性

//模块拆分
/*
//home.ts
//<reference path="components.ts" />进行注释
namespace Home {
  export namespace Slider {
    const user: Components.Account = {name: 'Amy'};
  }
  export class Page {
    constructor(private accout: Component.User) {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
}
//components.ts
namespace Components {
  export interface User {
    name: string
  }
  export class Header{}
  export class Content{}
  export class Footer{}
}
//配置"outFile",打包到一个文件中
*/

//import的使用和es6一致