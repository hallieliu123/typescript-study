
// 数组的类型注解
const arr1: (number | string)[] = [1, 'a', 'c', 2]; //实际ts可以进行类型推断,不用再加注解
const arr2: string[] = ['a', 'b', 'c']; //实际ts可以进行类型推断,不用再加注解
const arr3: undefined[] = [undefined, undefined];

  // set alias 使用别名
const arr4: {name: string, age: number}[] = [{name: 'Tom', age: 18}, {name: 'Lily', age: 18}];

type User = {name: string, age: number};
const arr5: User[] = [{name: 'Tom', age: 18}, {name: 'Lily', age: 18}];

  // 或
class User1 {
  name: string
  age: number
}
const arr6: User1[] = [
  new User1(),
  {name: 'Tom', age: 18},
  {name: 'Lily', age: 18}
];

// 元组类型注解; 元组是长度有限的数组,并且其每一项类型固定

const arr7: [string, string, number, User1] = ['a', 'b', 1, {name: 'Ella', age: 18}];

  //解析csv文件时
  //name,age,gender
const arr8: [string, number, string][] = [
  ['Amy', 18, 'female'],
  ['Penny', 18, 'female'],
  ['Sheldon', 18, 'male'],
];

