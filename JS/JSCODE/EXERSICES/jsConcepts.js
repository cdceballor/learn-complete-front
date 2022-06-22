// Change variables
var a = 1; // 1
var a = "hello"; //hello
var a = true; // true
var a = false; // false
var a = {   type: "hello",  num: 2 }; // {type: "hello", num: 2}

// Operators: js operators know where create the operation:
var a = 10+2*4; // 18
var a = (10-2)*4; // 32
var a = 6;
var b = 4;

const arr = [1,2,3,4,5,6,7,8,9];

const res= arr.map((val)=>{
    return val*2;
})

const arr2 = new Array(5,3,5,7,2,1);
console.log(res)
console.log(arr2.sort())

if(2 === 2.0){
    console.log("true")
}