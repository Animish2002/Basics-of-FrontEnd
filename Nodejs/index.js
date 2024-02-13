// const add = (a,b) =>{
//     return a + b;
// }

// console.log(add(1,3));

// const str = () =>{
//     console.log("Hayyy there!!!");
// } 

// str();

const obj ={
    value: 20,
    myFunction: () =>{
        console.log(this);
    },

};

obj.myFunction();