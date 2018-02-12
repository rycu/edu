//Program Structure Exercises


// Looping a triangle

var hashes = '';

while (hashes.length < 7) {
    hashes += '#';
    console.log(hashes);
}


// FizzBuzz

var j = '';

for (var i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        j = 'Fizz';
    } else if (i % 5 === 0) {
        j = 'Buzz';
    } else {
        j = i;
    }
    console.log(j);
}


// Chess board

var j = '';

var xLen = 8;
var yLen = 8;
var squares = xLen * yLen;
var toggle = true;

for (var i = 0; i < squares; i++) {

    if (i % 8 === 0) {
        j += '\n';
        toggle = !toggle;
    }

    j += (i % 2 !== 0) == toggle ? ' ' : '#'

}

console.log(j);

