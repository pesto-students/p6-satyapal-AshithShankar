/*Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope:

3.The candidate should be able to explain the code why it was not working before.

4.The candidate should be able to explain the code why it is working now.Outcome:

*/


function createStack(){
    const items = [];
     var obj = {
       push(item){
   
         items.push(item);
   
       },
       pop(){
         return items.pop();
       },
     };
     return obj; 
   }
   
   
   
   const stack= createStack();
   stack.push(10);
   stack.push(5);
   stack.pop();
   console.log(stack);
   stack.items = [22];
   console.log(stack);
 