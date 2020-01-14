// process.stdout.write('\x07');
// const [, , ...argv] = process.argv;

const time = process.argv.splice(2);

const timer = () => {
  for (let pause of time) {
    setTimeout(() => {
      if (pause > 0) {
        console.log(pause, " seconds");
        process.stdout.write("\x07");
      }
    }, pause * 1000);
  }
};

timer();

// const arr = ["a", "b", "c", "d", "e"];
// [...arr] => ['a', 'b', 'c'];

// {}, , ...argv}

// const obj = {
//   name: 'a',
//   age: 10
// }

// const { name } = obj;

// console.log(name);
