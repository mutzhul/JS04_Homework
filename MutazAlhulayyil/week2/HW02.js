/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */



let imgSrc = new Array("image1.png", "image2.png", "image3.png");


console.log(imgSrc)

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */


let q2 = imgSrc[0];

console.log(q2)

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

let q3 = imgSrc.length;


console.log(q3)

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


let q4 = imgSrc[2];

console.log(q4)


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */


let numberArray = [1,2,3,4]

let newNumberArray = []

for (let i=0 ; i < numberArray.length;i++) {

    newNumberArray[i] = numberArray[i]+ 1;


}


let q5 = console.log(newNumberArray);



console.log(q5)



/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */




var sumNewNumbers = 0;
var avgNewNumbers = 0;

for( var i = 0; i < newNumberArray.length; i++ ){
    sumNewNumbers += newNumberArray[i]; 

}
var avgNewNumbers = sumNewNumbers/newNumberArray.length;


q6 = avgNewNumbers;

console.log(sumNewNumbers);

console.log(q6)
