function printNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      setTimeout(() => {
        console.log(2);
        setTimeout(() => {
          console.log(3);
          resolve();
        }, 1000);
      }, 1000);
    }, 1000);
  });
}
printNumbers()
  .then(() => console.log('Done printing numbers'));
