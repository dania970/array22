<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>



console.log('Here is : ', 'array')

1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

var array1 = [1, 7, 9, 45];

var array2 = ["Str", "alex", "moh"];

var array3 = ['the', 'fox', 'over', 'lazy', 'dog'];



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"];
var indexBanana = fruits.indexOf("Banana");
var indexTomato = fruits.indexOf("Tomato");

console.log("Index of Banana:", indexBanana); 
console.log("Index of Tomato:", indexTomato); 
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var favoriteFood = ["Pizza", "Sushi", "mansaf", "maqloba", "mlokia"];
var favoriteSport = ["football", "Tennis", "Basketball"];
var favoriteMovie = ["the gad father", "sajeen", "The Dark Knight", "Interstellar"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(array) {
    // Check if the array is not empty
    if (array.length > 0) {
        // Return the first element of the array
        return array[0];
    } else {
        // If the array is empty, return undefined
        return undefined;
    }
}
var myArray = [1, 2, 3, 4, 5];
console.log(firstOfArray(myArray)); 

var emptyArray = [];
console.log(firstOfArray(emptyArray));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(array) {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
         return undefined;
    }
}
var myArray = [1, 2, 3, 4, 5];
console.log(lastOfArray(myArray)); 

var emptyArray = [];
console.log(lastOfArray(emptyArray)); 


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var originalArray = [1, 7, 9, 45];


originalArray.unshift(0); 
originalArray.push(100); 


originalArray.shift(); 
originalArray.pop();
console.log(originalArray); // Output: [7, 9, 45]


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];

var pushResult = array2.push(10); 
console.log("pushResult:", pushResult); 

var unshiftResult = array2.unshift(0); 
console.log("unshiftResult:", unshiftResult); 

var shiftResult = array2.shift();
console.log("shiftResult:", shiftResult); 

var popResult = array2.pop();
console.log("popResult:", popResult); 

console.log("Updated array:", array2); 


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(array) {
    var middleIndex = Math.floor(array.length / 2);

    if (array.length % 2 === 1) {
        // Odd number of elements, return the middle element
        return array[middleIndex];
    } else {
        // Even number of elements, return the two middle elements
        return [array[middleIndex - 1], array[middleIndex]];
    }
}
var oddArray = [1, 2, 3, 4, 5];
console.log("Middle element of oddArray:", middleOfArray(oddArray)); 

var evenArray = [1, 2, 3, 4];
console.log("Middle elements of evenArray:", middleOfArray(evenArray));




/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals[0]=[zebra];
animals[1]=[elephant]



/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    } else {

        return undefined;
    }
}


var nums = [1, 2, 3, 8, 9];
console.log("Index 3 of nums:", indexOfArray(nums, 3)); // Output: 8
console.log("Index 10 of nums:", indexOfArray(nums, 10)); // Output: undefined


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(array) {
  return array.slice(0, -1);
}

var nums = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums)); 

console.log(arrayExceptLast([4, 5, 6])); 

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(array, value) {
  array.push(value);
  return array;
}

var nums = [1, 2, 3, 8, 9];
console.log(addToEnd(nums, 55)); // [1, 2, 3, 8, 9, 55]


console.log(addToEnd([4, 5, 6], 10)); // [4, 5, 6, 10]


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArrayForLoop(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var nums = [1, 2, 3, 8, 9];
console.log(sumArrayForLoop(nums)); // 23
console.log(sumArrayForLoop([4, 5, 6])); // 15

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(array) {
  if (array.length === 0) {
    throw new Error("Array is empty");
  }
  
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
var nums = [1, 2, 3, 8, 9];
console.log(minInArray(nums)); // 1


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(array, element) {
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(removeFromArray(nums, 3)); 


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(array) {
  let oddElements = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddElements.push(array[i]);
    }
  }
  return oddElements;
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(oddArray(nums)); // [1, 3, 9]

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(array) {
  if (array.length === 0) {
    throw new Error("Array is empty");
  }
  
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

var nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums)); // 4.6
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(array) {
  if (array.length === 0) {
    throw new Error("Array is empty");
  }
  
  let shortest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
  }
  return shortest;
}
var strings = ["apple", "banana", "cherry", "date", "fig"];
console.log(shorterInArray(strings)); // "fig"


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}


console.log(repeatChar("hello", "l")); // 2
console.log(repeatChar("banana", "a")); // 3
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 2) {
    if (array[i].length % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}
var strings = ["apple", "banana", "cherry", "date", "fig"];
console.log(evenIndexOddLength(strings)); // ["banana", "date"]

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(Math.pow(array[i], i));
  }
  return result;
}


var numbers = [1, 2, 3, 4, 5];
console.log(powerElementIndex(numbers)); 


console.log(powerElementIndex([2, 3, 4, 5])); 


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



function evenNumberEvenIndex(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(evenNumberEvenIndex([2, 3, 4, 5, 6])); 
