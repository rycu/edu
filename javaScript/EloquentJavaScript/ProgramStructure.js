//Program Structure Exercises


// Looping a triangle
// dP                                    oo                                    dP            oo                            dP          
// 88                                                                          88                                          88          
// 88        .d8888b. .d8888b.  88d888b. dP 88d888b. .d8888b.    .d8888b.    d8888P 88d888b. dP .d8888b. 88d888b. .d8888b. 88 .d8888b. 
// 88        88'  `88 88'  `88  88'  `88 88 88'  `88 88'  `88    88'  `88      88   88'  `88 88 88'  `88 88'  `88 88'  `88 88 88ooood8 
// 88        88.  .88 88.  .88  88.  .88 88 88    88 88.  .88    88.  .88      88   88       88 88.  .88 88    88 88.  .88 88 88.  ... 
// 88888888P `88888P' `88888P'  88Y888P' dP dP    dP `8888P88    `88888P8      dP   dP       dP `88888P8 dP    dP `8888P88 dP `88888P' 
// oooooooooooooooooooooooooooo~88~ooooooooooooooooooo~~~~.88~ooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~oooooooooooo
//                              dP                    d8888P                                                       d8888P              

var hashes = '';

while (hashes.length < 7) {
    hashes += '#';
    console.log(hashes);
}


// FizzBuzz
//  88888888b oo                    888888ba                             
//  88                              88    `8b                            
// a88aaaa    dP d888888b d888888b a88aaaa8P' dP    dP d888888b d888888b 
//  88        88    .d8P'    .d8P'  88   `8b. 88    88    .d8P'    .d8P' 
//  88        88  .Y8P     .Y8P     88    .88 88.  .88  .Y8P     .Y8P    
//  dP        dP d888888P d888888P  88888888P `88888P' d888888P d888888P 
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                                                                       

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
//  a88888b. dP                                     dP                                        dP 
// d8'   `88 88                                     88                                        88 
// 88        88d888b. .d8888b. .d8888b. .d8888b.    88d888b. .d8888b. .d8888b. 88d888b. .d888b88 
// 88        88'  `88 88ooood8 Y8ooooo. Y8ooooo.    88'  `88 88'  `88 88'  `88 88'  `88 88'  `88 
// Y8.   .88 88    88 88.  ...       88       88    88.  .88 88.  .88 88.  .88 88       88.  .88 
//  Y88888P' dP    dP `88888P' `88888P' `88888P'    88Y8888' `88888P' `88888P8 dP       `88888P8 
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                                                                                               

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

