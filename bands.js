let bandNumber = 0

const takeNumber = function (band) {

bandNumber++;
console.log(bandNumber, band)
}
    
const scum = takeNumber("Galactic Scum")
console.log(scum)   

const under = takeNumber("Underdogs")
console.log(under)   

const bad = takeNumber("dogs")
console.log(bad)