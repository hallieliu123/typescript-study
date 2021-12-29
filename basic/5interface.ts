
//1. interface中的 ? readonly [prop: string]: any, function 
interface Person {
  readonly name: string,
  age?: number,
  // [propName: string]: any,
  greet(): string,
}

//2. 字面量传参 和 变量传参 区别
const person = {
  name: 'Amy',
  age: 18, 
  gender: 'female',
  height: 170,
  degree: 'PHD',
  greet() {
    return 'hello world'
  }
};
const getName = (person: Person) => {
  return person.name;
}
const setName = (person: Person): void => {
  // person.name = 'cannot change';
}
getName(person);
// getName({name: 'Amy', degree: 'PHD', greet: () => ''}); //在interface没有[propName: string]: any时,自面量传参不能有多出interface的属性

//3. class 应用 interface, class中必须包含 interface 中必须的属性
class User2 implements Person {
  name = 'Sheldon';
  greet:() => 'hell world';
  degree = 'PHD';
  height = 185;
}

//4. interface 继承 interface, 新的interface也包含被继承的interface
interface Teacher extends Person {
  teach(): string,
}
const teacher: Teacher = {
  teach: () => 'Computer Science',
  name: 'Bert',
  greet: () => '',
};

//5. interface 定义 函数类型
interface SaySth {
  (word: string): string,
}
const say: SaySth = (sth) => {
  return sth;
};
