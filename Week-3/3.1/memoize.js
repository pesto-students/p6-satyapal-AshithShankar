function add (a,b){
    return a + b;
  }
  // a hash map stores the function argument and the output as a key and its // map. This is called caching. when the same argument is passed again the // output is returned.
  function Memoize(fn){
    var cache = {};
    return function(...args){
  
      console.log(args);
        if(args in cache)
        {
          console.log('Picking from Cache');
         console.log(cache[args]);
        }
        else{
        cache[args] = fn(args[0],args[1]);        
        console.log(cache[args]);
        }
    }
  }
  
  const memoizeAdd = Memoize(add);
  memoizeAdd(100,100);
  memoizeAdd(100);
  memoizeAdd(100,200);
  memoizeAdd(100,100);
  
  