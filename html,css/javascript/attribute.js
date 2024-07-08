//traditional
document.getElementById("heading").setAttribute("style","background-color:pink;");
// document.getElementById.style.backgroundColor="pink";
// document.getElementById.style.color="white";
// let h1att = document.getElementById("head").setAttribute("id");

let h1att = document.getElementById("heading").className="head";
document.getElementById("heading").classList.add("head1");
document.getElementById("heading").classList.remove("head");
console.log(h1att);