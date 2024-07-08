// // Document object model
// document.title = "KGCAS";
// let elem = document.getElementById("head")
//  elem.innerHTML = "Subaranjani"
// console.log()

// Document object model
function contManupulate(){
let elem = document.getElementById("head")
 elem.innerHTML = "<h1>Subaranjani</h1>"
}
//contManupalte

setTimeout(contManupulate,5000);

function darkmode() {
    document.body.style.backgroundColor="black";
    document.body.style.color ="white"
  let button= document.getElementById("button")
   button.innerHTML=`<i class="bi bi-moon-stars-fill"></i>`;
   button.innerHTML += "lightmode";
}
function lightmode(){
    document.body.style.backgroundColor="pink";
    document.body.style.color ="black"
  let button= document.getElementById("button")
  button.innerHTML=`<i class="bi bi-brightness-high-fill"></i>`;
button.innerHTML += "darkmode";

}
function modechange(){
    let btext= document.getElementById("button").innerText
    if(btext=="darkmode"){
        darkmode();

    }else if(btext=="lightmode"){
        lightmode();
    }
}
