var ANCESTRY_FILE = JSON.stringify([
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
])


//Higher-Order Functions Exercises
console.log('--------------------------- Higher-Order Functions ---------------------------');

//Passing function
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// → Wampeter
// → Foma
// → Granfalloon

//function as a function arg
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function (number) {
    sum += number;
});
console.log(sum);
// → 15


//functions that create new functions.
function greaterThan(n) {
    return function (m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true


//functions that change other functions.
function noisy(f) {
    return function (arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false


//functions that provide new types of control flow.
function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}
repeat(3, function (n) {
    unless(n % 2, function () {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even


//Passing along arguments
function transparentWrapping(f) {
    return function () {
        return f.apply(null, arguments);
    };
}


var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
    function valueFor(person) {
        if (person == null)
            return defaultValue;
        else
            return f(person, valueFor(byName[person.mother]),
                valueFor(byName[person.father]));
    }
    return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
    if (person.name == "Pauwels van Haverbeke")
        return 1;
    else
        return (fromMother + fromFather) / 2;
}

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});


//filter
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

console.log(filter(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925;
}));
// → [{name: "Philibert Haverbeke", …}, …]


//transforming with map
function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}


var overNinety = ancestry.filter(function (person) {

    return person.died - person.born > 90;
});
console.log(map(overNinety, function (person) {
    return person.name;
}));
// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]


//How reduce works
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}
console.log(reduce([1, 2, 3, 4], function (a, b) {
    return a + b;
}, 0));
// → 10

//Using reduce
console.log(ancestry.reduce(function (min, cur) {
    if (cur.born < min.born) return cur;
    else return min;
}));
// → {name: "Pauwels van Haverbeke", born: 1535, …}

//Composability
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56



//Full reduce examle
console.log('reduceExample');

var reduceExample = [1, 2, 3].reduce(

    function (accumulator, currentValue, currentIndex, array) {

        console.log('\naccumulator: ', accumulator, '\ncurrentValue: ', currentValue, '\ncurrentIndex: ', currentValue, '\narray: ', array);


        return currentValue;
    }
);


//  88888888b dP            dP     dP                     oo                   
//  88        88            88     88                                          
// a88aaaa    88 .d8888b. d8888P d8888P .d8888b. 88d888b. dP 88d888b. .d8888b. 
//  88        88 88'  `88   88     88   88ooood8 88'  `88 88 88'  `88 88'  `88 
//  88        88 88.  .88   88     88   88.  ... 88    88 88 88    88 88.  .88 
//  dP        dP `88888P8   dP     dP   `88888P' dP    dP dP dP    dP `8888P88 
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~
//                                                                     d8888P       
console.log('\n---------------------------\n Flattening \n---------------------------');



var arrayOfarrays = [[1, 2], [3, 4], [5, 6], [7, 8]];

var flattened = arrayOfarrays.reduce(

    function (accumulator, currentValue, currentIndex, array) {
        return accumulator.concat(currentValue);
    },
    []
);
console.log(flattened);



//8888ba.88ba             dP   dP                                           dP       oo dP       dP                                        dP oo .8888b .8888b                                                       
//88  `8b  `8b            88   88                                           88          88       88                                        88    88   " 88   "                                                       
//88   88   88 .d8888b. d8888P 88d888b. .d8888b. 88d888b.          .d8888b. 88d888b. dP 88 .d888b88    .d8888b. .d8888b. .d8888b.    .d888b88 dP 88aaa  88aaa  .d8888b. 88d888b. .d8888b. 88d888b. .d8888b. .d8888b. 
//88   88   88 88'  `88   88   88'  `88 88ooood8 88'  `88 88888888 88'  `"" 88'  `88 88 88 88'  `88    88'  `88 88'  `88 88ooood8    88'  `88 88 88     88     88ooood8 88'  `88 88ooood8 88'  `88 88'  `"" 88ooood8 
//88   88   88 88.  .88   88   88    88 88.  ... 88                88.  ... 88    88 88 88 88.  .88    88.  .88 88.  .88 88.  ...    88.  .88 88 88     88     88.  ... 88       88.  ... 88    88 88.  ... 88.  ... 
//dP   dP   dP `88888P'   dP   dP    dP `88888P' dP                `88888P' dP    dP dP dP `88888P8    `88888P8 `8888P88 `88888P'    `88888P8 dP dP     dP     `88888P' dP       `88888P' dP    dP `88888P' `88888P' 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                                                                                                               d8888P                                                                                              
console.log('\n---------------------------\n Mother-child age difference \n---------------------------');

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var ageDifferences = ancestry.reduce(
    function (accumulator, currentValue) {
        if (byName[currentValue.mother]) {
            var childBorn = currentValue.born;
            var motherBorn = byName[currentValue.mother].born
            accumulator.push(childBorn - motherBorn);
        }
        return accumulator;
    },
    []
);

//GIVEN SOLUTION CHAINS FILTER AND MAP
// var differences = ancestry.filter(function(person) {
//     return byName[person.mother] != null;
//   }).map(function(person) {
//     return person.born - byName[person.mother].born;
//   });

console.log(average(ageDifferences));



//dP     dP  oo            dP                     oo                   dP    dP        oo .8888b              88888888b                                        dP                                       
//88     88                88                                          88    88           88   "              88                                               88                                       
//88aaaaa88a dP .d8888b. d8888P .d8888b. 88d888b. dP .d8888b. .d8888b. 88    88        dP 88aaa  .d8888b.    a88aaaa    dP.  .dP  88d888b. .d8888b. .d8888b. d8888P .d8888b. 88d888b. .d8888b. dP    dP 
//88     88  88 Y8ooooo.   88   88'  `88 88'  `88 88 88'  `"" 88'  `88 88    88        88 88     88ooood8     88         `8bd8'   88'  `88 88ooood8 88'  `""   88   88'  `88 88'  `88 88'  `"" 88    88 
//88     88  88       88   88   88.  .88 88       88 88.  ... 88.  .88 88    88        88 88     88.  ...     88         .d88b.   88.  .88 88.  ... 88.  ...   88   88.  .88 88    88 88.  ... 88.  .88 
//dP     dP  dP `88888P'   dP   `88888P' dP       dP `88888P' `88888P8 dP    88888888P dP dP     `88888P'     88888888P dP'  `dP  88Y888P' `88888P' `88888P'   dP   `88888P8 dP    dP `88888P' `8888P88 
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~88~ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~
//                                                                                                                                dP                                                            d8888P  
console.log('\n---------------------------\n Historical Life Expectancy \n---------------------------');


function assignedCentury(personName) {
    return Math.ceil(byName[personName].died / 100);
}

function groupBy(array, assignedCentury) {
    var centuries = {};

    array.forEach(
        function (e) {
            var century = assignedCentury(e.name);
            if (centuries[century]) {  // or century in centuries
                centuries[century].push(e.died - e.born);
            } else {
                centuries[century] = [e.died - e.born];
            }
        }
    );
    return centuries;
}

var data = groupBy(ancestry, assignedCentury);
for (e in data) {
    console.log(e, "th : ", average(data[e]));
}


// 88888888b                                         .d888888                 dP    d888888P dP                            .d88888b                               
// 88                                               d8'    88                 88       88    88                            88.    "'                              
//a88aaaa    dP   .dP .d8888b. 88d888b. dP    dP    88aaaaa88a 88d888b. .d888b88       88    88d888b. .d8888b. 88d888b.    `Y88888b. .d8888b. 88d8b.d8b. .d8888b. 
// 88        88   d8' 88ooood8 88'  `88 88    88    88     88  88'  `88 88'  `88       88    88'  `88 88ooood8 88'  `88          `8b 88'  `88 88'`88'`88 88ooood8 
// 88        88 .88'  88.  ... 88       88.  .88    88     88  88    88 88.  .88       88    88    88 88.  ... 88    88    d8'   .8P 88.  .88 88  88  88 88.  ... 
// 88888888P 8888P'   `88888P' dP       `8888P88    88     88  dP    dP `88888P8       dP    dP    dP `88888P' dP    dP     Y88888P  `88888P' dP  dP  dP `88888P' 
//ooooooooooooooooooooooooooooooooooooooo~~~~.88~ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//                                       d8888P                                                                                                                   
console.log('\n---------------------------\n Every And Then Some \n---------------------------');


//Every example
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}
var array1 = [1, 30, 18, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

//Every Exercise
function every(array, condition) {
    for (var i = 0; i < array.length; i++) {
        if (!condition(array[i])) {
            return false;
        }
    }
    return true;
}
console.log(every(array1, isBelowThreshold));


//Some Exercise
function some(array, condition) {
    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            return true;
        }
    }
    return false;
}

var array2 = [30, 40, 50, 60, 70, 80, 90];
console.log(array2.some(isBelowThreshold));
console.log(some(array2, isBelowThreshold));
