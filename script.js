function insert(num) {
    document.getElementById("display").value = document.getElementById("display").value + num;
}
function empty() {
    document.getElementById("display").value = "";
}
// need to create 4 digit pin 
function generatePin() {
        const pin = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('display-pg').value = pin;
    }
// submit button 
function submitPin(){
     if(document.getElementById('display-pg').value == document.getElementById('display').value){
            document.getElementById("pin-match").style.display = "block";
            document.getElementById("not-matched").style.display = "none";
        } else {
            document.getElementById("not-matched").style.display = "block";
            document.getElementById("pin-match").style.display = "none";
        }            
    }

// Pin generator
// function generatePin(){
//     const pin = Math.floor(1000 + Math.random() * 9000);
//     document.getElementById('generatorDisplay').value = pin;
// }
// // submit 
// function submitPin(){
//     if(document.getElementById('inputDisplay').value == document.getElementById('generatorDisplay').value){
//         document.getElementById('matched').style.display = "block";
//         document.getElementById("notMatched").style.display = "none";
//     } else {
//         document.getElementById("notMatched").style.display = "block";
//         document.getElementById('matched').style.display = "none";
//     }            
// }
// // Input number function
// function input(num){
//     document.getElementById('inputDisplay').value = document.getElementById('inputDisplay').value + num;
// }
// // Clear 
// function clean(){
//     document.getElementById('inputDisplay').value = '';
// }
// // backspace 
// function back(){
//     let value = document.getElementById('inputDisplay').value;
//     document.getElementById('inputDisplay').value = value.substr(0, value.length -1);          
// }



