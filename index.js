let first_name = document.getElementById("first_name");
let email = document.getElementById('email');
let psd1 = document.getElementById('psd1');
let psd2 = document.getElementById('psd2');
let stack = document.getElementById('stack');
let agree = document.getElementById('agree');
let form = document.getElementById('form');


form.addEventListener("submit", function(e){
    e.preventDefault();
    first_name = first_name.value;
    email = email.value;
    psd1 = psd1.value;
    psd2 = psd2.value;
    stack = stack.value;
    agree = agree.checked;

    // if any of the field is empty, call the users attention
    if(first_name === "" || email === "" || psd1 === "" || psd2 === "" || agree == false){
        alert("Please Enter all fields");
    }
    else {
        if (psd1.length >= 8 && psd1.length <= 16) {
            if (psd1 === psd2) {
                console.log(`first_name: ${first_name}, email: ${email}, psd1: ${psd1}, stack: ${stack}, agree: ${agree}`)
            }
            else {
                alert("Mismatched password!");
                form.reset()
            }
        }
        else{
            alert("Invalid! characters between 8 to 16 are accepted");
        }
    }
    ;
});