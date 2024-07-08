Math.random()
console.log(Math.random()*100);

console.log(Math.round(Math.random()*10));

function randomeNumberGenerator(end){
    return Math.round(Math.random()*end)
}
console.log(randomeNumberGenerator(10,50));

function randomNumberGenerator(start,end){
    let randnum= Math.random()*end;
    while(start>randnum){
        randnum = Math.random()*end;
    }
    return Math.round(randnum);
    }
    console.log(randomNumberGenerator(10,100));

console.log(Math.floor(1.99));

console.log(Math.ceil(1.99));

console.log(Math.min(1.99,7,6,4,5,5,5,5));

let arr =[10,20,70]
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(-3);

