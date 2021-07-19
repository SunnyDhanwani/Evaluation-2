
var user_promo = document.getElementById("promo").value;
var total = document.getElementsByTagName('span').value;

var b = document.getElementById('done');
b.addEventListener('click', p_done); 
console.log("here")
function p_done() {
    console.log("here")
    if (user_promo == 'masai30') {

        console.log(total - total * 0.30);
    }
}