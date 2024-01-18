console.log(document)
const toggle = document.getElementById('toggledark');
// const nav = document.getElementsByClassName('travelia');
// console.log(toggle);
const body = document.querySelector('body');

toggle.addEventListener('click' , function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#F7DBD8';
        body.style.color = 'black';
        body.style.transition = '0.5s';

    } 
    else {
        body.style.background = 'black';
        body.style.color = 'white';
        text.style.color = 'white';
        body.style.transition = '0.5s';
    }
})


const serve = document.getElementById('services')
serve.addEventListener('click' , function(){
    alert(" this page content : Top value for you , Lot of destination , Best tour guide , Easy Booking ");
    alert("you have to create account to have access for many opportunity")
})

const home = document.getElementById('home')
home.addEventListener('click' , function(){
    location.reload();
})