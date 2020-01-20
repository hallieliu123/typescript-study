// return number
function test1(first: number, second: number): number {
  return first + second;
}

// void
function test2(first: number): void {
  console.log(first);
}

// never
function test3(first: number): never {
  while (true) {}
  console.log(first);
}

// destructuring
function test4(
  { first, second }: { first: number; second: number } = { first: 1, second: 2 }
): number {
  return first + second;
}
