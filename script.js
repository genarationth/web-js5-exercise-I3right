// Exercise 1 --------------------------------------------------------------------------------------
// part1: create variable with 3 names
const userWaiting = ['Sofia','David','Juan']        // log: Sofia,David,Juan
console.log('[1] userin que : '+ userWaiting);
console.log('\n');

// part2: 2 more people add to back = .push(name 2 people) and the first one called by taller = remove first one
userWaiting.push('Sara','Augustin');                // log: Sofia,David,Juan,Sara,Augustin
userWaiting.shift();                                // log: David,Juan,Sara,Augustin
console.log('[2] userin que : '+ userWaiting);
console.log('\n');

// part3: David reserved post after him for "Renata"  && Elena add the end of the line
//        .slice after david WO remove                   .push elena
userWaiting.splice(1,0,'Renata');                   // add 'Renata' after david            David,Renata,Juan,Sara,Augustin
userWaiting.push('Elena')                           // add 'Elena' the end of waiting line  David,Renata,Juan,Sara,Augustin,Elena
console.log('[3] userin que : '+ userWaiting);
console.log('\n');


// Exercise 2 --------------------------------------------------------------------------------------
// log pattern * for 5 line and each * on each line = number of line 
const dotLine = (rows) => {
    let result = '';                                // set result
    for(let i = 0; i < rows; i++){                  // set 1stLOOP for loop with rows time
        for(let j = 0; j <= i; j++){                // set 2ndLOOP for print * and have to loop = i
            result += '* '                          // i = 1 -> J = 1    i = 2 -> J = 1,2    i = 3 -> J = 1,2,3 
        }                                           // i = 4 -> J = 1,2,3,4         i = 5 -> J = 1,2,3,4,5 
        result += '\n'                              // NEW LINE every time out of loop J
    }
    console.log(result);                            // out from loop
}
dotLine(5)

// Exercise 3 -------------------------------------------------------------------------------------
// WHILE LOOP
// 1 Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
const decreasing = (num) => {
    if(num>0){
        while(num>=0){
            console.log(num);
            num -= 0.5;
        }
    }
}
decreasing(3)                                   // result   3   2.5   2   1.5    1   0.5    0

console.log('\n');


// 2 Print all the odd numbers between 1 - 100.
const printUntilEnd = (numStart, numEnd) => {
    let value = numStart;
    while(value<=numEnd){
        console.log(value);
        value ++
    }
}
printUntilEnd(1,100)                             // result num from 1 2 3 ... 100


console.log('\n');


//  3 Write a method with a while loop to print 1 through n in square brackets. 
//  For example, if n = 6 print [1] [2] [3] [4] [5] [6]
const printNum = (num) => {
    let result = '';
    let count = 1;
    while(count<=num){
        result += '[';
        result += count;
        result += '] ';
        count ++;
    }
    console.log('Result as text ' + result);    // Result as text       [1] [2] [3] [4] [5] [6]

    let count2 = 1;
    let arrResult = [];
    while(count2<=num) {
        let prom = [];
        prom.push(count2);
        arrResult.push(prom);
        count2++;
    }
    console.log('Result as array ');
    console.log(arrResult);                     // Result as array      [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]
}
printNum(6)                                     // 2 result : because didn't understand exercise that required result as test or array


console.log('\n');


//  4 Write a method with a while loop that computes the sum of first n positive integers
//  For example sum = 1 + 2 + 3 + … + n   / n = 5 sum = 15  /  n = 19 sum = 190
const sumFrom1toNum = (num) => {
    let result = 0;
    let count = 0;
    let value = 1;
    while(count<num){
        result += value;
        count++;
        value++;
    }
    console.log(result);

  
    
}
sumFrom1toNum(5)                                // result = 15
sumFrom1toNum(19)                               // result = 190



