// let a = document.getElementById('amount').value 


// let b = document.getElementById('services').value


// let c = document.getElementById('persons').value


function tipamount(){
    var a = Number(document.getElementById('amount').value );
    var b = document.getElementById('services').value;
    var c = document.getElementById('persons').value;
    

    var total = a*b/100/c
    document.getElementById('t').innerHTML = "₹  "+ total + "  Each";

    if(typeof a === 'string' || c == 0 ) { 
        alert('Kindly check the input ')} 
}

document.getElementById('calculate').onclick = function() {tipamount()}
