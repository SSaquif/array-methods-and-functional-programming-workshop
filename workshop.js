function forEach(callback, theArray)
{
  var mappedArray = [];
  for(var i = 0; i < theArray.length; i++) 
  {
    mappedArray.push(callback(theArray[i]));
  }
  return mappedArray;
}

function map(mappingFunction, theArray) 
{
  return forEach(mappingFunction,theArray);
}

function filter(predicate, theArray) {
  var resultArray = [];
  var boolArray = forEach(predicate, theArray);
  for (var i = 0; i < theArray.length; i++)
  {
    if(boolArray[i])
    {
      resultArray.push(theArray[i]);
    } 
  }
  return resultArray;
}

function every(predicate, theArray) {
  
  if(theArray.length===0)
  {
    return true;
  }
  //var boolArray = forEach(predicate, theArray);
  for (var i = 0; i < theArray.length; i++)
  {
    if(!predicate(theArray[i]))
    {
      return false;
    } 
  }
  return true;
}

function some(predicate, theArray) {
  if(theArray.length===0)
  {
    return false;
  }
  for (var i = 0; i < theArray.length; i++)
  {
    if(predicate(theArray[i]))
    {
      return true;
    } 
  }
  return false;
}

function indexOf(item, theArray) {
  for (var i = 0; i < theArray.length; i++)
  {
    if(item === theArray[i])
    {
      return i;
    }
  }
  return -1;
}

function findIndex(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++)
  {
    if(predicate(theArray[i]))
    {
      return i;
    }
  }
  return -1;
}

function first(n, theArray) {
  if (arguments.length < 2)
  {
    return arguments[0][0];
  }
  else if (n > theArray.length)
  {
    return theArray;
  }
  else
  {
    var returnArray = [];
    for(var i=0 ; i < n; i++)
    {
      returnArray.push(theArray[i]);
    }
    return returnArray;
  }
}

function last(n, theArray) {
  if (arguments.length < 2)
  {
    return arguments[0][arguments[0].length-1];
  }
  else if (n > theArray.length)
  {
    return theArray;
  }
  else
  {
    var returnArray = [];
    var startIndex = theArray.length - n;
    console.log(startIndex);
    for(var i= startIndex ; i < theArray.length; i++)
    {
      returnArray.push(theArray[i]);
    }
    return returnArray;
  }
}

function pluck(property, arrayOfObjects) 
{
  var returnArray = [];
  for(var i=0; i < arrayOfObjects.length; i++)
  {
      returnArray.push(arrayOfObjects[i][property]);
  }
  return returnArray;
}

function flatten(theArray) {
  var returnArray = [];
  for (var i = 0; i < theArray.length; i++)
  {
    if(Array.isArray(theArray[i])) //if current element is an array itself
    {
      returnArray = returnArray.concat(flatten(theArray[i])); //recursively call flatten
    }
    else
    {
      returnArray.push(theArray[i]); 
    }
  }
  return returnArray;
}


function negate1(predicate) 
{
    return function(x)
    {
      return !predicate(x);
    };
}

function negate2(predicate) 
{
    //Note: Compare with above, apply(this,args) more useful when we do not know the no of arguments
    return function()
    {
      return !predicate.apply(this, arguments); //notes: this refers to the function itself
    };
}

function compose1(fun1, fun2) 
{
  return function(x)
  {
    var result = fun2(x);
    return result = fun1(result);
  };
}

function compose2(arrOfFuncs) 
{
  var string = "";
  //var args = arguments;
  return function(x)
  {
    string = x;
    for(var i=arrOfFuncs.length - 1; i>= 0; i--)
    {
      var func = arrOfFuncs[i];
      string= func(string);
    }
    return string;
  };
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
