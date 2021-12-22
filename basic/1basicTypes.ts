//类型注解: 自己写类型注解
//类型推断: ts 自动分析变量类型
//1.基本类型: string, number, boolean, null, undefined, symbol, void
/*
let count: number = 123;
let str1: string = 'hello';
let isDone: boolean = true;
let temp: number | string = 123;
temp = 'theory';

//2.对象类型:
const teacher: {
  name: string;
  age: number;
} = {
  name: 'Simon',
  age: 30
};

// have qs ???
class Person1 {}
const p1: Person1 = new Person1();

const getTotal1: (str: string) => number = str => parseInt(str, 10);
const getTotal2 = (str: string): number => parseInt(str, 10);

interface M {
  name: string;
}
const rawData = '{"name":"Damon"}';
const data: M = JSON.parse(rawData);

const date: Date = new Date();

const arr1: number[] = [1, 2, 3];
const arr2: (number | string)[] = [1, 'a', 2];
const arr3: undefined[] = [undefined, undefined, undefined];
//类型别名 type alias
type User = { name: string; age: number };
const arr4: User[] = [{ name: 'Damon', age: 18 }];
//tuple 元组
const t1: [string, string, number] = ['a', 'b', 1];

*/