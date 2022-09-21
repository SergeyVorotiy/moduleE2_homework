let array = [1,1,2,1,1];
let elementsEquial = false;
let i = 1;
while (array[i] === array[0] && i < array.length){
    i++
}
if (i == array.length) {
    elementsEquial = true;
}
console.log(elementsEquial);