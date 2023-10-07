function visualizeLoadingBar(number) {
  if (number < 0 || number > 100 || number % 10 !== 0) {
    return "Invalid input";
  }

  const progress = number / 10;
  const loadingBar = `[${"%".repeat(progress)}${".".repeat(10 - progress)}]`;

  if (number != 100) {
    return `${number}% ${loadingBar}\nStill loading...`;
  } else {
    return `${number}% Complete!\n${loadingBar} `
  }
}

const input = 100;
console.log(visualizeLoadingBar(input));
