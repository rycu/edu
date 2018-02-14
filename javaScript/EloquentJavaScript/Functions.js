//Functions Exercises


//Minimum
//8888ba.88ba  oo          oo                                
//88  `8b  `8b                                               
//88   88   88 dP 88d888b. dP 88d8b.d8b. dP    dP 88d8b.d8b. 
//88   88   88 88 88'  `88 88 88'`88'`88 88    88 88'`88'`88 
//88   88   88 88 88    88 88 88  88  88 88.  .88 88  88  88 
//dP   dP   dP dP dP    dP dP dP  dP  dP `88888P' dP  dP  dP 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                                                           

function customMin(a, b) {
    return a <= b ? a : b;
}
console.log(customMin(2, 6));


//Recursion
// 888888ba                                               oo                   
// 88    `8b                                                                   
//a88aaaa8P' .d8888b. .d8888b. dP    dP 88d888b. .d8888b. dP .d8888b. 88d888b. 
// 88   `8b. 88ooood8 88'  `"" 88    88 88'  `88 Y8ooooo. 88 88'  `88 88'  `88 
// 88     88 88.  ... 88.  ... 88.  .88 88             88 88 88.  .88 88    88 
// dP     dP `88888P' `88888P' `88888P' dP       `88888P' dP `88888P' dP    dP 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                                                                             

function isEven(x) {

    if (x == 0 || x == 1) {
        return x == 0 ? true : false;
    } else {
        var diretction = x < 0 ? 2 : -2;
        return isEven(x + diretction);
    }
}

console.log(isEven(50));


//Bean counting
// 888888ba                                                                      dP   oo                   
// 88    `8b                                                                     88                        
//a88aaaa8P' .d8888b. .d8888b. 88d888b.    .d8888b. .d8888b. dP    dP 88d888b. d8888P dP 88d888b. .d8888b. 
// 88   `8b. 88ooood8 88'  `88 88'  `88    88'  `"" 88'  `88 88    88 88'  `88   88   88 88'  `88 88'  `88 
// 88    .88 88.  ... 88.  .88 88    88    88.  ... 88.  .88 88.  .88 88    88   88   88 88    88 88.  .88 
// 88888888P `88888P' `88888P8 dP    dP    `88888P' `88888P' `88888P' dP    dP   dP   dP dP    dP `8888P88 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~
//                                                                                                 d8888P  

function countChar(stringIn, charToMatch) {
    var counter = 0;
    for (var i = 0; i < stringIn.length; i++) {
        if (stringIn.charAt(i) === charToMatch) {
            counter++;
        }
    }
    return counter;
}
console.log(countChar("BOB", "O"));


function countBs(stringIn) {
    return countChar(stringIn, 'B');
}
console.log(countBs("BOB"));


function countCharX(charToMatch) {
    return function (stringIn) {
        var counter = 0;
        for (var i = 0; i < stringIn.length; i++) {
            if (stringIn.charAt(i) === charToMatch) {
                counter++;
            }
        }
        return counter;
    }

}
var countBsX = countCharX('B');
console.log(countBsX('BOB'));