function display(num){
    document.getElementById('display').value = document.getElementById('display').value + num;

}

function backSpace(){
     document.value.substring(0, myTextarea.value.length - 1);
}

function erase(){
    document.getElementById('display').value = "";
}

function generatePin(){
    document.getElementById('display-pg').value = Math.floor(1000 + Math.random() * 9000);

}

function submitBtn(){
    if ( document.getElementById('display').value == document.getElementById('display-pg').value) {
        document.getElementById('pin-matched').style.display = 'block';
        document.getElementById('wrong-pin').style.display = 'none';
    }
    else{
        document.getElementById('wrong-pin').style.display = 'block';
        document.getElementById('pin-matched').style.display = 'none';
    }
}





