let emojis = ["♦","♥","♠","♣"];
let numbers = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

let randomemos = Math.floor(Math.random()*emojis.length);
let randomnumbers = Math.floor(Math.random()*numbers.length);



document.querySelector('.emo').innerHTML = emojis[randomemos];
document.querySelector('.emo2').innerHTML = emojis[randomemos];
document.querySelector('.num').innerHTML = numbers[randomnumbers];


let color = () => {
    if(emojis[randomemos] === "♥" ){
        document.querySelector(".emo").style.color = "red";
        document.querySelector(".emo2").style.color = "red";
        document.querySelector(".num").style.color = "black";
    }
}
color();

// test