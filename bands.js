let bandNumber = 0

const takeNumber = function (band) {

bandNumber++;
return bandNumber +" "+ band;

}

const scum = takeNumber("Galactic Scum")
console.log(scum)   

const under = takeNumber("Underdogs")
console.log(under)   

const good = takeNumber("Dogs")
console.log(good)
