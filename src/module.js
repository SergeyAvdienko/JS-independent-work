const foo = new Promise((resolve) => {
  const message = 'Асинхронная операция';
  resolve(message);
});

foo.then(console.log);


function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 3));

