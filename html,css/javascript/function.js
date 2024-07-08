//functions
let fullname ="Subaranjani"
function functionname() {
    console.log("working");
}
functionname();



function mark(a){

    ++a;
   return a;
}
console.log(mark(10));
console.log(mark(11));


function add(a,b){
   
   return a+b;
}
function sub(a,b){
   
    return a-b;
 }
 function mul(a,b){
   
    return a*b;
 }
 function div(a,b){
   
    return a/b;
 }
console.log(add(10,11),sub(20,11),mul(30,11),div(40,11));



function add(...numbers){
    let total=0;
    for (let i=0;i<numbers.length;i++){
      total +=numbers[i];
    }
    return total;
}
console.log(add(5,6,8));