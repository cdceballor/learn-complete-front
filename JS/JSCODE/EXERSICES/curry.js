// Curryfication is the way how to program using less variables in functions, 'cause we don't have the second parameter or whatever
// Also we need to use the closure to handle the curry

function sum(a) {
    return function(b) {
        console.log(a + b)
    }
}

const result = sum(1);
result(2);

// It's usefully with vanilla, because we can create elements and later add a text or something that helps us to create other child element
// Works well when there are vanilla and we need to create elements with vanilla and html