//Looping a triangle

//Solution

var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}

//FizzBuzz

//Solution

for (i=1; i<=100; i++) {
    if ( !(i%5) && !(i%3) ) {
        console.log('FizzBuzz');
    } else if ( !(i%5) && (i%3)) {
        console.log('Buzz');
    } else if ( !(i%3) ) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

//Chess Board

var size = 8;
var block = '#';
var space = ' ';

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var y = 1; y <= size; y++){
    if (i%2) {
        if (y%2) {
            line = line + space;
        } else {
            line = line + block;
        }
    } else {
        if (y%2) {
            line = line + block;
        } else {
            line = line + space;
        }
    }
  }

  console.log(line);
}
------------------------------
    
//Minimum
    
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//Recursion


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



//Bean Counting

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4







