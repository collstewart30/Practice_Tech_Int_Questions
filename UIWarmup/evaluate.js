
//What would be outputted from running through these if statements? How do they evaluate?

var a = {};
var b = null;
var c;  // = undefined

// if(var is true) { 
//     console.log(whatever is in here) 
// }


if(a) { 
    console.log(1) 
}
// empty object returns true -- would console.log 1 if true

if(b) { 
    console.log(2) 
}
// null is an object. returns false. will not return 2

if(b == c){ 
    console.log(3) 
}
// true, null and undefined evaluate to false
// == "is mostly true" in type and value

if(b === c){ 
    console.log(4) 
}
// false - won't console.log(4) - null is an object, undefined is undefined so they are not totally equal
// === "is totally true" in type and value

if(typeof b === typeof a){ 
    console.log(5) 
}
// true, null is an object


