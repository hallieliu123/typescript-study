//1. 访问类型: public, private, protected
class Person1 {
  public name1: string;
  private name2: string;
  protected name3: string;
  public greet() {
    console.log('test');
  }
}

class Person2 {
  constructor(
    public name1: string,
    private name2: string,
    protected name3: string
  ) {
    this.name1 = name1;
    this.name2 = name2;
    this.name3 = name3;
  }
  public getName2() {
    return this.name2;
  }
}

const p4 = new Person2('a', 'b', 'c');
console.log(p2.name1); // a
console.log(p2.getName2()); // b
// console.log(p2.name2);
// console.log(p2.name3);
class Person3 extends Person2 {
  constructor() {
    super('x', 'y', 'z');
  }
  public getName3() {
    return this.name3;
  }
}
const p5 = new Person3();
console.log(p3.getName3()); // z

// setter && getter
class Person4 {
  constructor(private _name?: string) {}
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value.trim();
  }
}
const p6 = new Person4();
console.log(p6.name);
p6.name = ' nihao ';
console.log(p6.name);

//2. 抽象类
abstract class Geom {
  abstract getArea(): number;
  getType() {
    return 'abstract Geom';
  }
}
class Circle extends Geom {
  getArea() {
    return 123;
  }
}
class Square extends Geom {
  getArea() {
    return 456;
  }
}
const c1 = new Circle();
console.log(c1.getArea());
console.log(c1.getType());
//3. 设计模式 之 单例模式
class Person5 {
  private static instance: Person5;
  constructor(name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Person5('Simon');
    }
    return this.instance;
  }
}
const p7 = Person5.getInstance();
const p8 = Person5.getInstance();
