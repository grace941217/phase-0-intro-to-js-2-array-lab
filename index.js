const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
  return cats;
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(Broom) {
  var tigers = [...cats, Broom];
  return tigers;
}

function prependCat(Arnold) {
  var kittens = [Arnold, ...cats];
  return kittens;
}

function removeLastCat() {
  var caats = cats.slice(0,cats.length-1);
  return caats;
}

function removeFirstCat() {
  var catts = cats.slice(1);
  return catts
}

