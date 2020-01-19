interface Point {
  x: number;
  y: number;
}

function test(data: Point) {
  console.log('123');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

test({ x: 1, y: 4 });
