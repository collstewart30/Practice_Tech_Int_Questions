
//What does this do and can you pick out any potential problems?

//This adds a click event onto the item specified by the passed in selector. 
// When clicked the default message 'Here is a number' will appear
// with the optional number appended to the end of the message

var object = {
    message: 'Here is a number: ',
    setupAlertMessageOnClick: function(elementSelector, optionalNumToAppend) {
      if(optionalNumToAppend){ //If you pass 0, this will fail (0 evaluates to false, this should check if optionalNumToAppend === undefined instead)
        this.message += optionalNumToAppend;
      }
      
      $(elementSelector).on('click', function(e) {
        alert(this.message)  //This will not be the message from above because of , this is scoped to the internal function, not the object. 
      });
    }
};

object.setupAlertMessageOnClick("#selector", 0); //Ideally would alert 'Here is a number: 0' when the #selector is clicked