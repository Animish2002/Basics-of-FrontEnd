// if(true){
//     var a = 'this is true';
// }

// console.log(a);

// if(true){
//     var b = "this is true";
// }

// console.log(b);


// printName();
// console.log(a);
// var a = 12;

// function printName(){
//     console.log("Animish");
// }

// function printSum(a,b){
//     return a + b;
// }

// console.log(printSum(1,1));

// console.log(c);

// let a=10;
// const b =100;
// var c = 12;


// // console.log(c);

// const a = true;
// const b = 'true';

// console.log(a == b)


// const arr = "abcba";
// function maxElement(arr){
//     return Math.min(...arr);
// }

// console.log(maxElement(arr));

// function isPlaindrome(arr){
//     return arr === arr.split(").reverse().join(");
// }
// console.log(isPlaindrome(arr));

//Factorial of a number 5

// const factorial = 1;
// var ans =1;
// for(let i=factorial ; i>1 ; i--){
//     ans = ans * i; 
// }
// console.log(ans);

//Number is prime or not

// const num = 2;
// let result = true;

// for(let i=2 ;i< num; i++){
//     if(num % i == 0){
//         result = false;
//         break;
//     }
// }

// if(result == true){
//     console.log("Number is prime");
// }
// else{
//     console.log("Number is not prime");
// }

// Max in an 2d array
// function findLargestInNestedArray(arr) {
// let max = Number.NEGATIVE_INFINITY;

// for(let i=0 ;i<arr.length ;i++){
//     for(let j=0; j<arr.length ;j++){
//         if(arr[i][j] > max){
//             max = arr[i][j];
//         }
//     }
// }
// return max;
// }

// const nestedArray = [
//     [1, 5, 19],
//     [3, 8, 2],
//     [7, 4, 6]
// ];

// const largestElement = findLargestInNestedArray(nestedArray);
// console.log("The largest element in the nested array is:", largestElement);


//Fibonacci's series

// let n = 8;
// let a = 0;
// let b = 1;
// let c;

// for (let i = 1; i < n; i++) {
//     c = a + b;
//     console.log(c + " ");
//     a = b;
//     b = c;
// }

//Bubble sort

// var arr = [1,4,3,2,5];

// for(let i=0 ;i<arr.length; i++){
//     for(let j=i+1 ;j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             const temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp; 
//         }
//     }
// }
// console.log(arr);

//Insertion sort

// var arr=[1,4,3,2,5];

// for(let i=0 ;i<arr.length ;i++){
//     let j = i+1;
//     while(j > 0 && arr[j-1] > arr[j]){
//         let temp = arr[j-1];
//         arr[j-1] = arr[j];
//         arr[j] = temp;
//         j--;
//     } 
// }
// console.log(arr);


//String palindrome

// const str = "absdba";
// output = true;
// let left = 0;
// let right = str.length - 1;

// while(left < right){
//     if(str[left] !== str[right] ){
//         output = false;
//     }
//     left++;
//     right--;
// }

// if(output === true){
//     console.log("yess");
// }
// else{
//     console.log("noo");
// }


//Reverse a string
// using split() method - splits string object into arr of strings
//reverse() to reverse the array
//join() to join all the elements

// const str = "abcdef";

// let strSplit = str.split("");

// let strReverse = strSplit.reverse();

// let strjoin = strReverse.join("");

// console.log(strjoin);

// const arr =[1,2,3,4,5];

// console.log(arr.reverse());

//Sum of all arrays
const arr =[1,2,3,4];
var sum = 0;
for(let i=0 ;i<arr.length ;i++){
    sum += arr[i];
}

console.log(sum);