// When we declared variables or functions before to the process
// All the variables declared with var are hoisting to the top level of the function

// console.log(valueConst)
// var valueVar = 23; //undefined
// let valueLet = 23; //Cannot access 'valueConst' before initialization
// const valueConst = 23; //Cannot access 'valueConst' before initialization

// With functions, we can call the function before to be initialized for the hosting
saludar("Cristian")

function saludar(name) {
    console.log("hello, ")
    sayName(name)
}

function sayName(name) {
    console.log(name);
}

// We have 2 phases: Creation and execution

// CREATION:
// We assign the variable in the scope or memory to used, basically,
// the place where we define the variables and functions but without state or value

// EXECUTION:
// Were we execute the code with the values that has been defined