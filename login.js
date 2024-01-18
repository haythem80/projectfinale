const showpass = document.getElementById("eye");
showpass.addEventListener("click" ,show_hide);

function show_hide(e) {
    const btn = e.target;
    showpass.classList.toggle("fa-eye");
    const passInput = document.getElementById ("exampleInputPassword1")
    if (passInput.type == "password") {
    passInput.type = "text" }
    else { 
        passInput.type = "password"
    }
}


function validation(){
    var input = document.getElementById("email");
    var email = document.getElementById("exampleInputEmail1").value;
    var text = document.getElementById("text");
    var emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(emailCheck)){
        input.classList.add("valid");
        input.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid."
        text.style.color = "lightgreen";
    }

    else if (email == "") {
        input.classList.remove("valid");
        input.classList.remove("invalid");
        text.innerHTML = ""
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        text.innerHTML = "Please Enter A Valid Email Address."
        text.style.color = "red";
    }
}



    var password = document.getElementById("exampleInputPassword1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const submit = document.getElementById('btn btn-primary')
    submit.addEventListener('click' , function(){
        if(password =="" && !email.match(emailCheck)){
        alert("create your account");
    } 
    else  {
        alert("welcome ")
    }

})

    

