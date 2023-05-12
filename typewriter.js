const sentence = "hello there from lighthouse labs\n";
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i += 50)
}