
// return number

function getCount(a: number, b: number): number {
  return a + b;
}

const d = getCount(1, 2);

// void: 不能有返回值

function getResult(): void {

}

// never: 函数不能执行完

function test(): never {
  // while (true){ }
  throw new Error();
  console.log('cannot excute here');
}

// destructuring

function destruct({a, b}: {a: number, b: number}): number {
  return a + b;
}

const total = destruct({a: 1, b: 2});

// 函数的其他写法

const func1: (str: string) => number = (str) => {
  return Number(str);
};

const func2 = (str: string) => {
  return Number(str);
}
