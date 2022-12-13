
let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let Fees = document.getElementById("fees");
let age = document.getElementById("ageNumber");

let batch = document.getElementById("select");
let date = document.getElementById("date");
let subBtn = document.getElementById("Sbtn");




// age function
// creativity 


subBtn.style.display = "none";
function ageFactor(element) {
    
    let agenum = element.value;

    if (agenum >= 18 && agenum <= 65) {
        
        
        subBtn.style.display = "block"

    } else {
        
       
        subBtn.style.display = "none";

    }




}










