// pair programming of Jason@github.com/zeipar, Yasu@github.com/yasu71

// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let counter = 0;
let time = 100;

for (const spinner of spinners) {  
  time += 200;
  setTimeout(() => {
    process.stdout.write(spinner);
  }, time)
}

// hello git test