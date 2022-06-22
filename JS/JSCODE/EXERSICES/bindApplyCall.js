// BIND, CALL AND APPLY are used to create an use the context of a function, for example, call and apply are the same thing, 
// but we pass the parameters different, apply[], and call no

const person1 = {
    name: 'John',
    say() { console.log("Hello, ", this.name, " ", this.second) },
    eat(food) { console.log("Hello, ", this.name, " it's time to eat your wonderful ", food); },
    walk(hours, time) { console.log("Hello, ", this.name, " you has been walking around ", hours, " ", time); }
}
const person2 = {
    name: "Enrique",
    second: "Onofre"
}

// Using Call and Apply that are the same thing but we pass the parameters different
// ******************************************************************************************************** CALL
person1.say.call(person2); // Hello, Enrique Onofre
person1.say() // Hello, John undefined
person1.eat.call(person2, "Hamburguesa"); // Hello,  Enrique  it's time to eat your wonderful  Hamburguesa
person1.walk.call(person1, 3, 7); // Hello,  John  you has been walking around  3   7

// ******************************************************************************************************** APPLY use a dependency array to call the parameters
person1.say.apply(person2)
person1.eat.apply(person2, ["Hamburguesa"]);
person1.walk.apply(person2, [1, 4]); // Hello,  Enrique  you has been walking around  1   4

// ******************************************************************************************************** BIND create a new function with the new properties
const person3 = person1.say.bind(person2)
person3() //Create a new function joining both scopes
const person4 = person1.eat.bind(person2)
person4("Pizza")
const person5 = person1.eat.bind(person2, "Rice")
person5()