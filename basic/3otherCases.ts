// 其他的 case

const data = new Date(); // 自动进行类型推断

interface D {
  a: number,
  b: string
}
const rawData = '{"a": "123", "b": "hello world"}';
const dataNew: D = JSON.parse(rawData); // 这种情况下可以定义一个类型

let x: number | string = 123;
x = 'hello world';
