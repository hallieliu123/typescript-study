//1.联合类型
//2.类型保护
//a/类型断言的方式
interface Bird {
  fly: Boolean,
  sing: () => {}
}
interface Dog {
  fly: Boolean,
  bark: () => {}
}
const trainAnimal1 = (animal: Bird | Dog) => {
  if(animal.fly) {
    (animal as Bird).sing();
    return;
  }
  (animal as Dog).bark();
}
//b/in语法的方式
const trainAnimal2 = (animal: Bird | Dog) => {
  if('sing' in animal) {
    animal.sing();
    return;
  }
  animal.bark();
}
//c/typeof语法的方式
const add1 = (param1: string | number, param2: string | number) => {
  if (typeof param1 === 'string' && typeof param2 === 'string') {
    return `${param1} ${param2}`;
  } else if(typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  }
}
//d/instanceof语法的方式
class ObjTest1 {
  count: number
}
class ObjTest2 {
  total: number
}
const add2 = (param1: ObjTest1 | ObjTest2, param2: ObjTest1 | ObjTest2) => {
  if(param1 instanceof ObjTest2 && param2 instanceof ObjTest2) {
    return param1.total + param2.total;
  }
}
