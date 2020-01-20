//1. ? [properName]
interface Person {
  name: string;
  age?: number;
  readonly gender: string;
  greet(str: string): string;
  [properName: string]: any;
}

const p2: Person = {
  name: 'Simon',
  gender: 'male',
  greet: (str: string) => 'test'
};
// p2.gender = 'female';

//2. extends
interface Teacher extends Person {
  teach(str: string): string;
}

const p3: Teacher = {
  name: 'Simon',
  gender: 'male',
  greet: (str: string) => 'test',
  teach: (str: string) => 'test'
};

//3. implements
class Student implements Person {
  name = 'Simon';
  gender = 'male';
  greet() {
    return 'greet';
  }
  getName() {
    return this.name;
  }
}

const s1 = new Student();
console.log(s1.getName());

//4. interface function
interface SayHi {
  (str: string): string;
}
const say: SayHi = (str: String) => 'test';
