function myFunction(name){
    return `Hello, ${name}!`
}

function receivesAFunction(callbackFunction, name){
   return callbackFunction(name);
}

function returnsANamedFunction(){
    const returnedFunction = function(name){
       return `Hello, ${name}!`
    }
    return returnedFunction;
}

function returnsAnAnonymousFunction(name){
   return function(){
    return `Hello, ${name}!`
   }
}