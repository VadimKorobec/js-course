let num = 50;

while (num < 55) {
  console.log(num);
  num += 1;
}

do {
  console.log(num);
  num += 1;
} while (num < 60);

for (let i = 0; i <= 10; i += 1) {
  if (i % 3) {
    continue;
  }
  console.log(i);
}
