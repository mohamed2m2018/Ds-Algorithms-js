//Solution using toString
const reverseInt = (number) => {
  let negative = false;

  //If last number is zero git rid of it
  while (number % 10 === 0) {
    number = number / 10;
  }

  //if number is negative, turn it to positive
  if (number < 0) {
    negative = true;
    number = Math.abs(number);
  }

  //turn the string into array then reverse then join it after checking whether 

  //it's positive or negative

  negative
    ? console.log(
        parseInt(number
          .toString()
          .split('')
          .reverse('')
          .join('') * -1)
      )
    : console.log(
        parseInt(number
          .toString()
          .split('')
          .reverse('')
          .join(''))
      );
};

reverseInt(-100);
