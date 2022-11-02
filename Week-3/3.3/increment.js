/* Here createI function has two internal functions inc() and log() which are returned when the function is called. When the function is called and assigned to an object.
The count variable is declared inside createI and eventhough inc() is called externally it doesnt increment the value of count variable that is assigned 
*/


function createI(){
    let count = 0;
    function inc(){
     count++;
    } 
   
    let message = `${count}`; //string syntax----at this point count is zero ---
    function log(){
      console.log(count);
       console.log(message);
    } 
   return [inc,log];
}

var [inc,log] = createI(); //function call
inc();  // these dont affect that output becuase the message variable is already declared and output is anyway going to be zero
inc();
inc();
log(); 