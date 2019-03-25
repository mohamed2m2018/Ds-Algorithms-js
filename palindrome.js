const palindrome = (str) => {
  let reversed = '';

  for (element of str) {
    reversed = element + reversed;
  }

  if (reversed === str) console.log('this word is palindrome');
  else console.log('this world is not palindrome');
};

palindrome('abba');
palindrome('salah');

//Solution2 using every helper

const palindrome2 = (str) => {
  palindromed = str.split('').every((char, index) => {
    return char === str[str.length - 1 - index];
  });

  palindromed
    ? console.log('this word is palindrome')
    : console.log('this word is not palindrome');
};

palindrome2('abba');
palindrome2('salah');
