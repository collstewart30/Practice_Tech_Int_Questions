// Create a method that takes a string and returns whether or not the parenthesis are balanced.
// There are various ways to do this, but this is the most scalable

// "(())" - pass
// "()()" - pass
// "((())())" - pass

// ")(" - fail
// "())(" - fail
// "())(()" - fail


function isBalanced(test) {
    var charArry = test.split(''); //Split string into char array
    var parens = [];

    charArry.forEach(char => { //iterate through each character
        if(char === '(') {
            parens.push(char); //if it is an opening paren, push onto stack
        } else if(char === ')'){ //If it is a closing, pop off of stack the corresponsing opening paren
            if(parens.length === 0) return false; // There isn't a matching '(', return false
            parens.pop();
        }
    });

    return parens.length === 0; //There were leftover ')', return false
}