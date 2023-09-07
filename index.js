// BODY

document.body.style.backgroundColor = "gray";

// HEADER

let header = document.querySelector("h1");

header.style.color = "white";


// XMAS HEAD

let head = "&#9733;"

/* for (let i = 0; i < 1; i++){
    document.getElementById("xmas_head").innerHTML += head + "<br>";
    
}

*/


// XMAS BODY

let star = ".*&#9733;*.";
let audio = document.getElementById("music");

for (let i = 0; i < 10; i++){
    document.getElementById("xmas_tree").innerHTML += star + "<br>";
    star = star + "*&#9733;*.";
}

// XMAS LIGHTS



function lights(){

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
   
    let redbluegreen = "rgb(" + red + "," + green + "," + blue + ")";
    
    document.getElementById("rgb").innerHTML = `RGB: (${red} , ${green}, ${g=blue})`
    document.getElementById("xmas_tree").style.color = redbluegreen;
    document.getElementById("xmas_head").style.color = "yellow"
}

function start(){
   go = setInterval(lights, 500);
   audio.play();
//    document.getElementById("rgb").innerHTML ="RGB:" + "(" + red + ")," green + blue;
}

function stop(){
    clearInterval(go);
    audio.pause();
    document.getElementById("xmas_tree").style.color = "black";
    document.getElementById("xmas_head").style.color = "black"
}