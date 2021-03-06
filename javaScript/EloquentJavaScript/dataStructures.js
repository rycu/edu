//Data Structures Exercises
console.log('--------------------------- Data Structures Exercises ---------------------------');

//d888888P dP                                                            .8888b                                                             
//   88    88                                                            88   "                                                             
//   88    88d888b. .d8888b.    .d8888b. dP    dP 88d8b.d8b.    .d8888b. 88aaa     .d8888b.    88d888b. .d8888b. 88d888b. .d8888b. .d8888b. 
//   88    88'  `88 88ooood8    Y8ooooo. 88    88 88'`88'`88    88'  `88 88        88'  `88    88'  `88 88'  `88 88'  `88 88'  `88 88ooood8 
//   88    88    88 88.  ...          88 88.  .88 88  88  88    88.  .88 88        88.  .88    88       88.  .88 88    88 88.  .88 88.  ... 
//   dP    dP    dP `88888P'    `88888P' `88888P' dP  dP  dP    `88888P' dP        `88888P8    dP       `88888P8 dP    dP `8888P88 `88888P' 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~ooooooooo
//                                                                                                                         d8888P           
console.log('\n---------------------------\n The sum of a range \n---------------------------');

function theRange(start, end, step) {
    var range = [];
    if (step < 0) {
        for (var i = 0; i >= (end - start); i += step || 1) {
            range.push(i + start);
        }
    } else {
        for (var i = 0; i <= (end - start); i += step || 1) {
            range.push(i + start);
        }
    }
    return range;
}


function theSum(range) {
    var sum = 0;
    for (var i = 0; i < range.length; i++) {
        sum += range[i];
    }
    return sum;
}

console.log(theRange(5, 2, -1));
console.log(theSum(theRange(3, 5, 2)));



// 888888ba                                               oo                                                                                        
// 88    `8b                                                                                                                                        
//a88aaaa8P' .d8888b. dP   .dP .d8888b. 88d888b. .d8888b. dP 88d888b. .d8888b.    .d8888b. 88d888b.    .d8888b. 88d888b. 88d888b. .d8888b. dP    dP 
// 88   `8b. 88ooood8 88   d8' 88ooood8 88'  `88 Y8ooooo. 88 88'  `88 88'  `88    88'  `88 88'  `88    88'  `88 88'  `88 88'  `88 88'  `88 88    88 
// 88     88 88.  ... 88 .88'  88.  ... 88             88 88 88    88 88.  .88    88.  .88 88    88    88.  .88 88       88       88.  .88 88.  .88 
// dP     dP `88888P' 8888P'   `88888P' dP       `88888P' dP dP    dP `8888P88    `88888P8 dP    dP    `88888P8 dP       dP       `88888P8 `8888P88 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~
//                                                                     d8888P                                                               d8888P  
console.log('\n---------------------------\n Reversing an array \n---------------------------');

function reverseArray(array) {
    var newArray = [];
    for (var i = array.length; i > 0; i--) {
        newArray.push(i);
    }
    return newArray;
}

function reverseArrayInPlace(array) {

    var arraylength = array.length;
    for (var i = arraylength; i > 0; i--) {
        array.push(i);
    }
    return array.slice(3);

}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArrayInPlace([1, 2, 3]));



// .d888888     dP oo            dP   
//d8'    88     88               88   
//88aaaaa88a    88 dP .d8888b. d8888P 
//88     88     88 88 Y8ooooo.   88   
//88     88     88 88       88   88   
//88     88     dP dP `88888P'   dP   
//oooooooooooooooooooooooooooooooooooo
console.log('\n---------------------------\n A list \n---------------------------');

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list;
}
console.log(arrayToList([1, 2, 3]));


function listToArray(list) {
    var array = [];
    //Drill into obj until obj returns null
    for (var item = list; item; item = item.rest) {
        array.push(item.value);
    }
    return array;
}
console.log(listToArray(arrayToList([1, 2, 3])));


function prepend(element, list) {
    return { value: element, rest: list };
}
console.log(prepend(0, arrayToList([1, 2, 3])));


function nth(list, number) {
    var i = 0;
    for (var item = list; item; item = item.rest) {
        if (i === number) {
            return item.value;
        }
        i++;
    }
    return undefined;
}

console.log(nth(arrayToList([6, 8, 10]), 2));
console.log(nth(arrayToList([6, 8, 10]), 4));


function nth2(list, number) {

    if (list) {
        if (number === 0) {
            return list.value;
        } else {
            //use given number as countdown.
            return nth2(list.rest, number - 1);
        }
    } else {
        return undefined;
    }

}

console.log(nth2(arrayToList([6, 8, 10]), 2));
console.log(nth2(arrayToList([6, 8, 10]), 1));



//888888ba                                                                                          oo                            
//88    `8b                                                                                                                       
//88     88 .d8888b. .d8888b.  88d888b.    .d8888b. .d8888b. 88d8b.d8b.  88d888b. .d8888b. 88d888b. dP .d8888b. .d8888b. 88d888b. 
//88     88 88ooood8 88ooood8  88'  `88    88'  `"" 88'  `88 88'`88'`88  88'  `88 88'  `88 88'  `88 88 Y8ooooo. 88'  `88 88'  `88 
//88    .8P 88.  ... 88.  ...  88.  .88    88.  ... 88.  .88 88  88  88  88.  .88 88.  .88 88       88       88 88.  .88 88    88 
//8888888P  `88888P' `88888P'  88Y888P'    `88888P' `88888P' dP  dP  dP  88Y888P' `88888P8 dP       dP `88888P' `88888P' dP    dP 
//oooooooooooooooooooooooooooo~88~oooooooooooooooooooooooooooooooooooooo~88~oooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                             dP                                        dP 
console.log('\n---------------------------\n Deep comparison \n---------------------------');


function deepEqual(value1, value2) {
    if (typeof value1 === "object" && typeof value2 === "object") {

        var propCount1 = 0;
        var propCount2 = 0;

        for (property in value1) {

            propCount1 += 1;

            if (!deepEqual(value1[property], value2[property])) {
                return false;
            }
        }

        for (property in value2) {
            propCount2 += 1;
        }

        return propCount1 === propCount2;
    } else if (value1 === value2) {
        return true;
    } else {
        return false;
    }
}

console.log(deepEqual(1, 1)); //true
console.log(deepEqual(1, 2)); //false
console.log(deepEqual({ test: 1, test2: 'X' }, { test: 1, test2: 'X' })); //true
console.log(deepEqual({ test: 1, test2: 'X' }, { test: 1, test2: 'Y' })); //false
console.log(deepEqual({ test: 1, test2: 'X' }, { test: 1, test3: 'X' })); //false
console.log(deepEqual({ test: 1, test2: 'X' }, { test: 1, test2: 'X', test3: 'X' })); //false