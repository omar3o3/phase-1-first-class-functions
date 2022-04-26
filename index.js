function receivesAFunction(theFunction){
  return theFunction();
}

function returnsANamedFunction(){
  return function anotherFunction(){

  }
}

function returnsAnAnonymousFunction(){
  return function (){
    
  }
}
