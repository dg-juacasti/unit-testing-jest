const palindrome = (value) => {
  if (typeof value !== 'string') {
    return "Value have to be a string"
  }
  const palim = value.toLocaleLowerCase().split('').reverse();
  return palim.join('') === value.toLocaleLowerCase();
};

module.exports = {palindrome}





