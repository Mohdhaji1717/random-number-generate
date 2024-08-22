const btn = document.getElementById("generatebtn");
const msg = document.getElementById("result");

function generate(){
    // this code generate the number from 1-10
    // let randomNumber = Math.floor(1+ Math.random() * 10);
    // this code generate the number from 1000-9000
    let randomNumber = Math.floor(1000+ Math.random() * 8999);
    msg.innerHTML = "Random Number: " + randomNumber;
}
