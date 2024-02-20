
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let newArray = tutorials.map(function(string){
    let newString = '';
    newString = string.substring(0,1).toUpperCase()
    for (let i = 1; i < string.length; i++){
      if (string[i-1] !== ' ') {
        newString += string[i];
      } else if (string[i-1] === ' ') {
        newString += string.substring(i,i+1).toUpperCase();
      }
    }
    return newString;
  })
  return newArray;
}


console.log(titleCased());
