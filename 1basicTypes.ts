//类型注解: 自己写类型注解
//类型推断: ts 自动分析变量类型
//1.基本类型: string, number, boolean, null, undefined, symbol, void
let count: number = 123;
let str: string = 'hello';
let isDone: boolean = true;

//2.对象类型:
const teacher: {
  name: string;
  age: number;
} = {
  name: 'Simon',
  age: 30
};

const arr: number[] = [1, 2, 3];

// have qs ???
class Person {}
const p1: Person = new Person();

const getTotal: () => number = () => 123;

//
