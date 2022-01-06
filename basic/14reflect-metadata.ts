import 'reflect-metadata';

@Reflect.metadata('info', 'classTest')
class Person {
  @Reflect.metadata('info', 'ageTest')
  age = 18;
  constructor(public name: string) {
    this.name = name;
  }
  @Reflect.metadata('info', 'getNameTest')
  @Reflect.metadata('infoNew', 'getTitleTest-infoNew')
  getName() {
    return this.name;
  }
}
console.log(Reflect.getMetadata('info', Person)); // classTest
console.log(Reflect.getMetadata('info', Person.prototype, 'age')); // ageTest
console.log(Reflect.getMetadata('info', Person.prototype, 'getName'));// getNameTest

console.log(Reflect.hasMetadata('info', Person)); // true
console.log(Reflect.hasMetadata('info', Person.prototype, 'age')); // true
console.log(Reflect.hasMetadata('info', Person.prototype, 'getName')); // true

class Teacher extends Person {
  @Reflect.metadata('info', 'getTitleTest')
  getTitle() {
    return 'teacher';
  }
}
console.log(Reflect.hasMetadata('info', Teacher)); // true
console.log(Reflect.hasMetadata('info', Teacher.prototype, 'age')); // true
console.log(Reflect.hasMetadata('info', Teacher.prototype, 'getName')); // true
console.log(Reflect.hasOwnMetadata('info', Teacher)); // false
console.log(Reflect.hasOwnMetadata('info', Teacher.prototype, 'age')); // false
console.log(Reflect.hasOwnMetadata('info', Teacher.prototype, 'getName')); // false
console.log(Reflect.hasOwnMetadata('info', Teacher.prototype, 'getTitle')); // true

console.log(Reflect.getOwnMetadata('info', Teacher.prototype, 'getName')); // undefined
console.log(Reflect.getOwnMetadata('info', Teacher.prototype, 'getTitle')); // getTitleTest

console.log(Reflect.getMetadataKeys(Teacher.prototype, 'getName')); // ['design:returntype','design:paramtypes','design:type','infoNew','info']

console.log(Reflect.getOwnMetadataKeys(Teacher.prototype, 'getName')); // []

Reflect.deleteMetadata('info', Person);
console.log(Reflect.hasMetadata('info', Person)); // false

const user = {
  name: 'Amy'
};
// Reflect.defineMetadata(key, value, target);
Reflect.defineMetadata('dataTest', 'test', user);
console.log(Reflect.getMetadata('dataTest', user)); // test

// 类中方法的装饰器先于类的装饰器执行
@Reflect.metadata('key', 'value user')
class User {
  @Reflect.metadata('key', 'value getName')
  getName() {}
  @setMetaData('key', 'value getAge')
  // @Reflect.metadata('key', 'value getAge')
  getAge(){}
}
function test() {
  for(let item in User.prototype) {
    const data = Reflect.getMetadata('key', User.prototype, item);
    console.log('data--->', data); //value getName, value getAge
  }
}
function setMetaData(item: string, value: string) {
  return (prototype: any, key: string) => {
    Reflect.defineMetadata(item, value, prototype, key);
  };
}
test(); //value getName, value getAge
