
//What does this do and can you pick out any potential problems?

var object = {
    message: 'Here is a number: ',
    setupAlertMessageOnClick: function(elementSelector, optionalNumToAppend) {
      if(optionalNumToAppend){ 
        this.message += optionalNumToAppend;
      }
      
      $(elementSelector).on('click', function(e) {
        alert(this.message) 
      });
    }
};

object.setupAlertMessageOnClick("#selector", 0);