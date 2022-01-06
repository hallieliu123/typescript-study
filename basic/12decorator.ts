//类的装饰器 - decorator
//1/类的装饰器本质就是编译时执行的函数,其接受的参数是类本身
//装饰器改变类的行为,是代码编译时发生的,而不是在运行时
function testable<T extends new (...args: any[]) => any>(target: T){ // 接受的参数是类本身,// any下面改写
  target.prototype.getResult = () => {
    console.log('result');
  };
  console.log('test decorator');
}
@testable
class MyTestableClass {}
const tc = new MyTestableClass();
const tc1 = new MyTestableClass(); // 执行实际只会打印一次 test decorator
(tc as any).getResult();

//2/使用多个类的装饰器,会像剥洋葱一样,从外向内进入,从内向外执行
function testable1<T extends new (...args: any[]) => any>(target: T) {// any下面改写
  console.log('testable1');
}
function testable2(target: any){
  console.log('testable2');
}
@testable2
@testable1
class Mytest {} // 打印 testable1 testable2

//3/如果觉得一个参数不够用,可以在外层再封装一层
function getTarget(flag: boolean) {
  if (flag) {
    return function <T extends new (...args: any[])=> any >(target: T){// any下面改写
      console.log('flag is true');
      target.prototype.getName = () => {
        return 'Name1'
      };
    }
  }
  return function <T extends new (...args: any[]) => any>(target: T){
    console.log('flag is false');
    target.prototype.showName = () => {
      return 'Name2'
    };
  }
}
@getTarget(true)
class MyTest1 {}
const tt1 = new MyTest1();
console.log((tt1 as any).getName()); //Name1, 下面改写anys

//4/解决在decorator中添加的方法,调用时报错问题
function fix() {
  return <T extends new (...args: any) => any>(target: T) => {
    return class extends target {
      getName () {
        return 'fix function no tip'
      }
    }
  };
}
const Test = fix()(class Test3 {
  constructor() {
    console.log('111');
  }
});
const test4 = new Test();
console.log(test4.getName()); // fix function no tip

//5/由于存在函数提升,使得装饰器不能用于函数.类是不会提升的,所以就没有这方面的问题.
