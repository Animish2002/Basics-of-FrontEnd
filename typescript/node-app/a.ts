interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(user:User) {
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}

function greet(user:User){
    return `Hello ${user.firstName} ${user.lastName}`;
    
}
console.log(greet);


isLegal({
    firstName: "John",
    lastName: "Doe",
    age: 19
})