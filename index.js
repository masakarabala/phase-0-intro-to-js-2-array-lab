// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
  console.log(cats);

//appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
//console.log(destructivelyAppendCat("Bob"))

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name){
    cats.unshift(name)
 return cats
}
//console.log(destructivelyPrependCat("Bob"))

//removes the last cat from the cats array
function destructivelyRemoveLastCat(name){
    cats.pop(name)
 return cats
}
//console.log(destructivelyRemoveLastCat())
//removes the first cat from the cats array
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
 return cats
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
    let cats1= [...cats,name];
    return cats1;
  }

  //1) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
  function prependCat(name){
    let cats1= [name,...cats];
    return cats1;
  }
  //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
  function removeLastCat(name){
    let cats1= cats.slice(0,cats.length-1);
    return cats1;
  }
  //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
  function removeFirstCat(name){
    let cats1= cats.slice(1);
    
    return cats1;
  }