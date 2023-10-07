function perfectNumber(num) {
  let sumProper = 0;

  for (let i = 1; i < num; i++) {

    if (num % i == 0) {
    sumProper += i;
    }
  }

  if (sumProper == num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfectNumber(6);