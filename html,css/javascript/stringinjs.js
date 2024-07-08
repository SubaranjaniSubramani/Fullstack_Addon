
console.log("subaaaa".length);

//charset
let word = "kgcas";
let arr = [];
for (let i = 0; i < word.length; i++) {
arr[i]=word.charAt(i);
    
// }
console.log(arr);


//  using split

 let word = "kgcasdd ddd";
let arr = word.split("")
console.log(arr);


//join
let word= "suba"
let arr = [10,30,40,50,60]
console.log(arr.join("|"));


//lowercase
let word="SUBA"
console.log(word.toLowerCase());


//replace
 let word="SUBA"
console.log(word.replace("A","U" ))


//endswith
let word="SUBA"
console.log(word.endsWith("UBA"))

//startswith
let word="SUBA"
console.log(word.startsWith("S"))

//both lower & endswith
let word="SUBA"
console.log(word.toLocaleLowerCase(),word.endsWith("A"))

//indexof
let word="suba"
console.log(word.indexOf("u"));

let word="SUBA"
console.log(word.lastindexof("U"))

//substring
let word ="SUBARANJANI";
console.log(word.substring(4,11));

let word ="   SUBARANJANI  suba";
console.log(word.trimStart());

