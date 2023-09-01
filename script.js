
// console.log('helo')

// let a  =10
// console.log(a);
// a = 34

// console.log(a);


// 1st way

// function greet(){
//     console.log('heloo');
// }

// greet()

// 2nd way
// const greet = function(){
//     console.log('heloo');
// }


// greet()

// 3rd way , arrow function 

// const greet = ()=>{
//     console.log('hello');
// }

// greet()



// without parameter without return

// function greet(){
//     console.log('hello');
// }

// greet()

// with arugment without return
// function greet(fname,lname){
//     console.log('hello',fname, lname);
// }

// greet('sagar','sharma')

// const greet = (name)=>{
//     console.log("hello",name);
// }

// const greet = (fname,lname) =>{
//     console.log("hello",fname,lname);
// }

// greet('sagar','verma')

// if there is only one parameter
// then you can omit round braces
// const greet = name => {
//     console.log("hello",name);
// }

// greet('sharma')


// const greet = name => console.log("hello",name)


// greet('sharma')

// 

// function greet(){

//     return 45;
// }


// const a = greet()

// console.log(a);

// const greet =() =>{ 
//     return 445
// }
// const greet =() => 445
// const a = greet()

// console.log(a);



// with paramter with return


// function add(a,b){ // function decalaeration

//     const sum = a + b; // expresion (every expresion is a statement)
//     return sum
// }
// const result = add(10,20) // function calling
// console.log(result);

// expresion reustn a value
// statement may or may not return a value

// const add = (a, b)=>{
//     const sum = a + b;
//     return sum
// }

// const add = (a, b)=>{
//     return a + b;
// }

// const add = (a, b)=> a + b;

// const result = add(10,20)

// console.log(result);

const fname = 'sagar'
const lname = 'sharma'
const age  = 3
// const msg = 'Hello'+ ' ' + fname + " " + lname + 'and age is ' + age


// const msg = `Hello ${fname} ${lname} and your age is  ${age}`
// console.log(msg);
//  condition ? if true: if false
const youngOrOld = age > 18 ? "adult":'Bachha'
const msg = `Hello ${fname} ${lname} and your age is  ${age} and he is ${youngOrOld}`
console.log(msg);
