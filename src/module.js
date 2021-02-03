const foo = new Promise((resolve) => {
  const message = 'Привет, Сергей! Это асинхронная операция из module.js';
  resolve(message);
});

foo.then(console.log);

