//1/类中方法的装饰器,也是编译时执行
//方法中的装饰器先于类的装饰器执行
//普通方法,参数: target(类的prototype),key(方法name),descriptor(对该属性的描述对象)
//静态方法,参数: target(类本身),key(方法name),descriptor(对该属性的描述对象)
function myDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // descriptor.writable = false;
  // descriptor.value = () => 'Sheldon';
  descriptor.writable = true;
}
class Person5 {
  constructor(public name: string) {
    this.name = name;
  }
  @myDecorator
  getName() {
    return this.name;
  }
}
const p5 = new Person5('Amy');
p5.getName = () => 'HaHa';
console.log(p5.getName()); // 'HaHa'

//2/类中的访问器装饰器,3个参数与类中普通方法的装饰器一致,并且setter和getter只能有一个有装饰器

//3/类中属性的装饰器,参数只有两个 target(类的prototype), key(属性名称)
function nameDecorator(targetPrototype: any, key: string): any {
  // targetPrototype[key].name = 'Penny'; //这里是更改不了属性值的,因为这里是prototype中的name属性,而类中定义的是实例中的属性
  const desciptor: PropertyDescriptor = {
    writable: true
  };
  return desciptor;
}
class Person6 {
  // @nameDecorator
  name = 'Lenoard';
  getName() {
    return this.name;
  }
}
const p6 = new Person6();
p6.name = 'Penny';
console.log('--------->', p6.name); //'Penny'

//4/类中方法的参数装饰器, 3个参数(target:类的prototype,key:方法名,paramIndex:修饰的第几个参数),同样也是编译时执行
function paramDecorator(prototype: any, key: string, index: number ) {
  console.log(prototype, key, index);
}
class Person7 {
  setInfo(name: string, age: number, @paramDecorator title: string){}
}
//打印出 { setInfo: [Function] } setInfo 2

//5/应用举例
function userInfoDecorator(prototype: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value;
  descriptor.value = () => {
    try{
      fn()
    } catch(err) {
      return 'userInfo not exists';
    }
  }
}
const userInfo: any = undefined;
class Person8 {
  @userInfoDecorator
  getUserName() {
    return userInfo.name;
  }
  @userInfoDecorator
  getUserAge() {
    return userInfo.age;
  }
}
const p8 = new Person8();
console.log(p8.getUserName());//userInfo not exists
console.log(p8.getUserAge());//userInfo not exists

function userInfoDecorator1(attr: string) {
  return (prototype: any, key: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;
    descriptor.value = () => {
      try{
        fn()
      } catch(err) {
        return `userInfo.${attr} not exists`;
      }
    }
  }
}
const userInfo1: any = undefined;
class Person9 {
  @userInfoDecorator1('name')
  getUserName() {
    return userInfo.name;
  }
  @userInfoDecorator1('age')
  getUserAge() {
    return userInfo.age;
  }
}
const p9 = new Person9();
console.log(p9.getUserName());//userInfo.name not exists
console.log(p9.getUserAge());//userInfo.age not exists
