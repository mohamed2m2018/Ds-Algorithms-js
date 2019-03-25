//Solution 1

//looping on the string, from end to start, and accumulating letters to a

//new string

//so c++ solution

const reverse = (str) => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log('My solution is ', newStr);
};

reverse('Muhammed');

//another solution

//using array reversing function

//converting array to string by split, then joining it again to return as string

const reverse2 = (str) => {
  const newStr = str
    .split('')
    .reverse()
    .join('');

  console.log('Built in solution is ', newStr);
};

reverse2('Muhammad');

//Solution 3 using es6 for of syntax
//best solution
const reverse3 = (str) => {
  let reversed = '';

  for (element of str) {
    reversed = element + reversed;
  }

  console.log('Solution using element of is  ', reversed);
};

reverse3('Muhammad');

//Solution 4 using reduceHelper

reverse4 = (str) => {
  //converting string into array using split function
  let strIntoArr = str.split('');

  //reduce runs once for every element

  //reduce works as the following

  //first argument is callback, which takes two arguments

  //the callback function is executed on every character

  //first arg in callback is accumulator,second argument is the element

  //the accumulator value stays with us in all the loops

  //we can give it initial value in the second argument of reduce

  console.log(
    'Solution using reduce function in arrays',
    strIntoArr.reduce((reversed, character) => {
      return character + reversed;
    }, '')
  );
};

reverse4('Muhammad');
