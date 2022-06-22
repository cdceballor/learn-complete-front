// Primitive vs not primitive data types
// PRIMITIVE: Number, String, Boolean, null, undefined = types of data that are immutable, doesn't have methods and the copy is for value
let x = 12; //In memory, we create x = 12
let y = x; //Assign to y the value of x
x = 5; //Change the x value but not the y value 'cause is pass value for value

// NOT PRIMITIVE: Object, Array, functions
let a = [2, 4] //Create a reference with a value (0001) that has a relationship with the container of the value [2,4]
let b = a //Create a reference of the a reference, if we alter the b value, we alter the value of a also, 'cause is reference

// Alter b to see the example, add a value
b.push(5);
console.log(a); //Change the value for line 12 with the reference [2,4,5]
console.log(b); //[2,4,5]