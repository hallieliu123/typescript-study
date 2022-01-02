// generic泛型,泛指的类型

//1.函数中的泛型
//a/
function add<ABC>(param1: ABC, param2: ABC): ABC {
  return param2;
}
add<number>(1 ,2);

//b/
function join1<T, P>(p1: T | P, p2: T | P){}
join1<number, number>(1, 1);
join1<string, string>('a', 'b');
join1<string, number>('a', 1);

//c/. T[]
function loop<T>(param: Array<T>) {}
loop<string>(['a', 'b']);

//2.类中的泛型
{
  class DataManager<T> {
    constructor(private list: T[]) {}
    getResult(index: number): T {
      return this.list[index];
    }
  }
  const d = new DataManager<string>(['a', 'b']);
}

{
  interface Person {
    name: string
  }
  class DataManager<T extends Person> {
    constructor(private list: T[]) {}
    getResult(index: number): string {
      return this.list[index].name;
    }
  }
  const d = new DataManager([{name: 'Sheldon'}]);
}
