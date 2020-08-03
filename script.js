
function insert(num) {
    document.getElementById("display").value = document.getElementById("display").value + num;
}
function empty() {
    document.getElementById("display").value = "";
}


// pin generator  
function generatePin() {
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('display-pg').value = pin;
}

// submit button 
function submitButton(){
 if(document.getElementById('display-pg').value == document.getElementById('display').value){
        document.getElementById("wrong-pin").style.display = "block";
        document.getElementById("pin-matched").style.display = "none";
    } else {
        document.getElementById("wrong-pin").style.display = "block";
        document.getElementById("pin-matched").style.display = "none";
    }            
}









