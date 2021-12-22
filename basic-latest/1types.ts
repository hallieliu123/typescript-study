/*
  什么是 typescript
    a/ typescript 是 javascript 的一个超集（像 es6 是 es5的超集一样.)
    b/ 代码编写时一些错误，js只在运行时才会报出，ts在编写时就会提示.
    c/ ts的数据类型声明，使得代码更易阅读.
*/

// 1. 基础类型: number, string, null, undefined, boolean, symbol, void;

const num: number = 123;
const str: string = 'hello world';

// 2. 对象类型

const obj: {
  a: number,
  b: string,
} = {
  a: 123,
  b: 'hello world',
};

const arr: string[] = ['a', 'b', 'c'];

class Person {}; // v
const p: Person = new Person();

const getVale: () => string = () => {
  return '';
}

// 3. 类型注解 type annotation: 直接定义变量的类型

let a: number = 123;
let b: string = 'abc';

// 如果这样写,ts 无法推断变量类型,需要手动定义类型
let t; // => let t: string;
t = 'hello world';

// 4. 类型推断 type inference: ts会自动分析变量类型

const c1 = 123;
const c2 = 456;

const c3 = c1 + c2;

const o = {
  a: 1,
  b: 'abc'
};

// 如果ts不能推断类型则需要加类型注解

const getValue = (a: number, b: number) => {
  return a + b;
}

const c = getValue(1, 2);
