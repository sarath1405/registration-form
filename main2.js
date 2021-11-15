const pass = document.getElementById('pass');
const pass1 = document.getElementById('pass1');
const submit = document.getElementById('submit');
const ph = document.getElementById('ph-no');
const gen = document.getElementById('gen');

function val_password(a,b){
    if(a != b){
        alert('Passwords does not Match!');
    }
}

function val_phno(a){
    if(a.length != 10) {
        alert('Invalid Phone Number!');
    }
}

function val_password1(a) {
    if(a.length < 8) {
        alert('Password must be more than 7 characters!');
    }
}

function val_gender(a) {
    if(a == 1) {
        alert("Gender cannot be 'none'");
    }
}

submit.addEventListener('click', (e)=>{
    val_password(pass.value, pass1.value);
    val_password1(pass.value);
    val_phno(ph.value);
    val_gender(gen.value);
});