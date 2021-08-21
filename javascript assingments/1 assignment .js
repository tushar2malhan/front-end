// **Q1. Write a program that prints even numbers from 1 to 100 in descending order the output should show: 100 98 96 . . . 2
/*
*/
    // (function () {
    //     var total = 0;
    //     var count = 0;
    //     for (i = 100; i > 0; i--) {
    //         if (i % 2 == 0) {
    //             total = total + i
    //             count++
    //             console.log(i)
    //         }
    //     }
    
    // })()

// Q2: Write a function which accepts list of country names as parameter and returns the longest country name as output.
/*
*/
var arr=['first length2131','india','united states of america']
var max = 0;
var longest ;

for (var i =0; i<arr.length ; i++){
        if (arr[i].length > max){
                var max = arr[i].length;
                longest = arr[i]
        }
}
console.log(longest)





// Q3: Write a function which accept a number and reverse a number as output. For Example n = 83343; Output : 34338
/*
*/
function reverse(n) {    // Given in google {
    // n = n + " ";
    // return n.split("").reverse().join(""); }
    // my output 
    n1 = String(n)
    return n1.split("").reverse().join('');
}

console.log(reverse(83343));

console.log('')


// Q4: Write a function to accept a number as parameter and return false or true based on weather the number is prime or not. 
//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.**

function Prime(n) {
    var n, i, result = true;
    for (i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            result = false;
            break;
        }
    }
    if (n == 1) {
        console.log('neither prime or composite as its 1')
    }
    else if (result == true) {
        console.log(true);
    }
    else {
        console.log(false);
    }
  
}
`Answer 4 = ${Prime(25)}`

