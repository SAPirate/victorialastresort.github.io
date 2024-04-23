 
let qty_two = document.querySelector("#qtyInput_two");

function decrement_two(){

    if (qty_two.value <=0) {
        qty_two.value = 0;
    }else{
        qty_two.value = parseInt(qty_two.value) -10800;
    }
}
function increment_two(){
    qty_two.value = parseInt(qty_two.value) +10800;
}

// 
let qty_three = document.querySelector("#qtyInput_three");

function decrement_three(){

    if (qty_three.value <=0) {
        qty_three.value = 0;
    }else{
        qty_three.value = parseInt(qty_three.value) -21000;
    }
}
function increment_three(){
    qty_three.value = parseInt(qty_three.value) +21000;
}

// 

const theSelect = document.getElementById("theSelect");
const theDev = document.getElementById("multiselect");

theSelect.addEventListener("change",function(event){

    if (event.target.value == 'hide'){
        theDev.style.display = "none"
    }else{
        theDev.style.display = "block"
    }
})

// 

function emailSend(){

    var names = document.getElementById('names').value;
    var phone = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var days = document.getElementById('days').value;
    var individual = document.getElementById('individual').value;
    var qtyInput_two = document.getElementById('qtyInput_two').value;
    var couple= document.getElementById('couple').value;
    var qtyInput_three = document.getElementById('qtyInput_three').value;
    var activities_yes = document.getElementById('activities_yes').value;
    var activities_no = document.getElementById('activities_no').value;
    var helicopter = document.getElementById('helicopter').value;
    var river_raft = document.getElementById('river_raft').value;
    var devil_pool = document.getElementById('devil_pool').value;
    var elephant_ride = document.getElementById('elephant_ride').value;
    var lion_walk = document.getElementById('lion_walk').value;
    var civ_falls = document.getElementById('civ_falls').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shcapital18@gmail.com",
        Password : "F5BD816EC68C4D9325D4C0623868CF200E62",
        To : 'shcapital18@gmail.com',
        From : "file:///C:/Users/Madala%20Ronewa/Desktop/booking/booking.html",
        Subject : "victoria falls website contact form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}