
//What would the output be for the following?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;       // this = the OBJECT that is executing the current function
        console.log(this.foo); // bar bc this 
        console.log(self.foo); 
        (function() {   // this is now a callback function. not a method in the myObject object - method is func, this is referencing the global object since it's now a regular function
            console.log(this.foo); 
            console.log(self.foo); 
        }());
    }
};
myObject.func();

// if the function is part of an object, we call the function a method
// method references an object
// "this" console logged will return entire object
// "this.__" will return specified variable


// function (not part of an object) references the global 