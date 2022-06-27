for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    num = "FuzzBuzz";
  } else if (i % 3 == 0) {
    num = "Fizz";
  } else if (i % 5 == 0) {
    num = "Buzz";
  } else {
    num = i;
  }
  console.log(num);
}
