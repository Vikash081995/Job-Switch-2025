const sum = (a,b)=>a+b;
console.log(sum(1,2));

// ====================================================================
//IMPLICIT RETURN 

const getLength = str=>str.length;

console.log(getLength('Hello'));    //'output: 5'

// ====================================================================
// NO PARAMETERS

const greet=()=>'HELLO WORLD';
console.log(greet());
// ================================================================
//Single parameters 

const numbers =[1,2,3,44,5,6,7,8,9,10];
const double = numbers.filter((num)=>{
    return num*2;
})
console.log(double);

//==================================================================
// Array methods 

const numbers1 = [1,2,3,4,5,6,7,8,9,10];

const squares =numbers1.map(num=>num*num);
console.log(squares);
//==================================================================
// Object methods

const person ={
    name:"Alice",
    getName:()=>person.name
}
console.log(person.getName()); // Output: "Alice"
//==================================================================
//Default parameters

const multiply = (a,b=1)=>a*b;
console.log(multiply(5,2)); // Output: 10
console.log(multiply(5)); // Output: 5
/// =================================================================
//REST PARAMETERS
const sumAll =(...numbers)=>numbers.reduce((acc,num)=>acc+num,0)
console.log(sumAll(1,2,3,4,5)); // Output: 15
//==================================================================
//Destructuring

const formatPerson =({name,age})=>`Name:${name},Age:${age}`;
console.log(formatPerson({name:"Alice",age:30})); // Output: "Name: Alice, Age: 30"

//==================================================================
// Lexical This 
function RegularFunc(){
    this.value = 1;
    setTimeout(function(){
        console.log(this.value) //Output: undefined
    },1000)
}

function ArrowFunc(){
    this.value = 1;
    setTimeout(()=>{
        console.log(this.value) //Output: 1
    },1000)
}

new RegularFunc();
new ArrowFunc();
//==================================================================
