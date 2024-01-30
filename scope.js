//Part 1
console.log(varX); //undefined,var is hoiseted.
//console.log(letY); //error
//console.log(constZ); //error

function isHoisted() {
  if (varX === undefined) {
    console.log("varX is hoisted");
  } else {
    console.log("varX is not hoisted");
  } //it returns varX is hoisted

  /*if (letY === undefined) {
    console.log("letY is hoisted");
  } */ //it returns error

  /*if (constZ === undefined) {
    console.log("constZ is hoisted");
  } */ //it returns error
}

isHoisted();

var varX = "i'm x";
let letY = "i'm y";
const constZ = "i'm z";

//Part 2
combineStrings("bir ", "iki ", "uc"); //we can call function before declare;

function combineStrings(firstText, secondText, thirdText) {
  console.log(firstText + secondText + thirdText);

  if (firstText && !secondText && !thirdText) {
    console.log(firstText);
  } else if (firstText && secondText && !thirdText) {
    console.log(firstText, secondText);
  } else if (firstText && secondText && !thirdText) {
    console.log(firstText + secondText + thirdText);
  } else {
    return undefined;
  }
  return;
}

combineStrings("salam ", "necesiz ");

//Part 3

function scope() {
  var varAz = "Azerbaijan";
  let letRu = "Russia";
  const constEn = "England";

  var varAz = "AZE"; //We can declare again declared with (var).
  varAz = "AZ"; //We can override which declared with (var).
  letRu = "RU"; //We can override but we can't declare again which declared with (let).
  //constEn = "En" /We can't override,we can't declare again which declared with (const).
}

//console.log(varAz); //error
//console.log(letRu); // error Becouse in the local scope we cant use variable in global.
//console.log(constEn); // error

if (typeof varX === "string") {
  var varAz = "Azerbaijan";
  let letRu = "Russia";
  const constEn = "England";
}

console.log(varAz); // Azerbaijan Becouse in the block scope variable which we declared with var we can use variable in global.
//console.log(letRu); // error Becouse in the block scope variable which we declared with let we can't use variable in global.
//console.log(constEn); // error Becouse in the block scope variable which we declared with const we can't use variable in global.
