// const coding = ["html", "css", "js", "react", "python", "c++"];

// const values = coding.forEach((items) => {
//     console.log(items);
//     return items;
// });

// console.log(values);  //this will always provide us undefined and even if we do return the ele in the forEach LOOP STILL THE SAME
// html              //output will be
// css
// js
// react
// python
// c++
// undefined

//now use of filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numReturn = numbers.filter((item) => {
//   return item > 8; // here for the arrow fun if not using curly braces it will not work need to add return keyword
// });
// console.log(numReturn);

//if we declare scope by using parentesis then use return keyword

// const numReturn = numbers.filter((item) => item <= 5);
// console.log(numReturn);

//if not then directly add them it will work

//another way to do it but more complex and not clean
// const numReturn = [];

// numbers.forEach((num)=>{
//     if(num > 4){
//         numReturn.push(num);
//     }
// })
// console.log(numReturn);

////////MAP///////
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums
//   .map((num) => {
//     return num + 1;
//   })
//   .map((num) => {
//     return num * 10;
//   })
//   .filter((num) => {
//     return num > 80;             // this is optional chaining
//   });

// console.log(newNums);

//////////REDUCE//////////
const nums = [1, 2, 3];

// it consist of an accumulator and currentValue
// syntax to write that is
//////////////////////////////////////////////////////////////////////////////|
// const initialValue = 0;                                                    |
// const sumWithInitial = nums.reduce(                                        |
//   (accumulator, currentValue) => accumulator + currentValue,               |
//   initialValue                                                             |
// );                                                                         |
//////////////////////////////////////////////////////////////////////////////|

// const sum = nums.reduce(function (acc, currentValue) {
//   return acc + currentValue;
// }, 0);

// const sum = nums.reduce((acc, currVal) => {
//   console.log(`Accumulator: ${acc} and Current Value: ${currVal}`);
//   return acc + currVal;
// }, 10);

// const total = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

const shoppingCart = [
  {
    itemName: "Mobile Phone",
    price: 45000,
  },
  {
    itemName: "Laptop",
    price: 60000,
  },
  {
    itemName: "Smart Watch",
    price: 4000,
  },
  {
    itemName: "Mouse",
    price: 350,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalPrice);
