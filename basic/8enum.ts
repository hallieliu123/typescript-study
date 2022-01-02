//1. Enum 枚举类型, 可以正向也可以反向使用

// const Status = {
//   qualified: 0,
//   verified: 1,
//   failed: 2
// };

enum Status {
  qualified, // 第一项默认是0,每一项也可直接赋值,默认从第一项0一次加1
  verified = 2,
  failed,
}
const test = (code: number) => {
  if(code === Status.qualified) {
    return 'blabla qualified blabla';
  } else if(code === Status.verified) {
    return 'blabla verified blabla';
  } else if(code === Status.failed) {
    return 'blabla failed blabla';
  }
  return 'erro';
}
console.log(Status.failed); // 3














