const { log } = console;
//1.类的定义
class Person1 {
  name = 'Sheldon';
  getName(){
    return this.name;
  };
}

//2.类的继承, 子类覆盖父类中的属性或方法
class Teacher1 extends Person1 {
  name = 'Amy';
  getTeacherName() {
    return this.name;
  }
  getName() {
    return this.name;
  }
}
const t1 = new Teacher1();
// console.log(t1.getName()); // Amy
// console.log(t1.getTeacherName()); // Amy

//3.类的中的 super -> vvv
class Teacher2 extends Person1 {
  getAllNames() {
    return `${super.getName()} Amy`
  }
}
const t2 = new Teacher2();
// console.log(t2.getAllNames()); // Sheldon Amy

//4. 类中的属性访问类型
// public  在类的内外部都可以调用,包括实例
// protected  可以在类的内部及继承的类中调用
// private 只能在类的内部调用,继承的类中也不行
class Person2 {
  // public name = 'Lenoad';
  // private name = 'Lenoad';
  protected name = 'Lenoad';
  getName() {
    return this.name;
  }
}
class Teacher3 extends Person2 {
  getTeacherName() {
    return this.name;
  }
}
//5.类中的构造器
// class Person3 {
//   public name: string;
//   constructor(name) {
//     this.name = name;
//   }
// }
// 简化写法
class Person3 {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}
const p1 = new Person3('Penny');
// console.log(p1.name); // Penny

class Teacher4 extends Person3 {
  constructor(public name: string,public title: string) {
    super(name);
  }
}
const p2 = new Teacher4('Penny', 'no');
// for(let item in p2) {
//   console.log('item---->', item);
// }

//6.getter & setter
class Person4 {
  constructor(private _name: string) {}
  get name() {
    // do sth _name
    return this._name;
  }
  set name(name: string) {
    // do sth name
    this._name = name;
  }
}
const p3 = new Person4('Howard');
// console.log(p3.name); // Howard
p3.name = 'Berny';
// console.log(p3.name); // Berny
//7.设计模式 之 单例模式
// a/外部不能调用 constructor
// b/每次调用只能返回第一次创建的实例
class Demo {
  private static _instance: Demo;
  private constructor(public name: string) {};

  static getIntance() {
    if (!this._instance) {
      this._instance = new Demo('demo');
    }
    return this._instance;
  }
}
// const d = new Demo(); // 报错
const d1 = Demo.getIntance();
const d2 = Demo.getIntance();
// console.log(d1.name); // demo
// console.log(d2.name); // demo

//8.类中的 readyonly
{
  class Person {
    constructor(public readonly name: string) {}
  }
  const p = new Person('Kuthopaly');
  // log(p.name); // Kuthopaly
  // p.name = 'change name';  // 报错
}

//9.抽象类 & 抽象类中的抽象方法
{
  abstract class Person { // 抽象类只能被继承使用不能直接实例化
    constructor(public name: string){
      this.name = name;
    }
    greet(){
    };
    abstract sayHi(): string; // 抽象类中的抽象方法,继承的子类必须包含此方法的实现
  }
  class Student extends Person {
    constructor(public name: string) {
      super(name);
    }
    sayHi() {
      return '';
    }
  }
  class Teacher extends Person {
    sayHi() {
      return '';
    }
  }
  const s = new Student('Bert');
  log(s.name); // Bert
}


