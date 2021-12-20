// button-toggle 
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        document.body.style.background = "white"
        document.body.style.color = "black"
    });
}
document.getElementById('btn2').addEventListener('click', fun);
function fun() {
    document.body.style.background = "green"
    document.body.style.color = "white"
}
document.getElementById('btn3').addEventListener('click', fun1);
function fun1() {
    document.body.style.background = "pink"
    document.body.style.color = "black"
}
document.getElementById('btn4').addEventListener('click', fun2);
function fun2() {
    document.body.style.background = "yellow"
    document.body.style.color = "black"
}
// ended-button 
function myFunction_setting() {
    document.getElementById('btn-div-click').classList.toggle('block')
}
// scroll 
window.addEventListener('scroll', () => {
    let content = document.getElementById('slide');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('scale-up-center')

    } else {
        content.classList.remove('scale-up-center')

    }
})
// form 
const Submitbtn = document.getElementById('btn')
Submitbtn.addEventListener('click', submitCheck);
function submitCheck(event) {
    event.preventDefault();
    const Username = document.querySelector('#name').value;
    const Email = document.querySelector('#email').value;
    const content = document.querySelector('#query').value;
    const Emailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (Username.trim() == "") {
        // alert('Kindly enter your name')
        document.getElementById('para').innerHTML = '<i class="fa fa-exclamation" aria-hidden="true"></i> Enter your name'
        document.getElementById('para').style.display = "block"
        document.querySelector('#name').style.border = "1px solid red"

    } else if (Username.trim() !== "") {
        document.getElementById('para').style.display = "none"
    }

    if (!Email.match(Emailformat)) {
        document.querySelector('#email').style.border = "1px solid red"
        document.getElementById('para-email').innerHTML = '<i class="fa fa-exclamation" aria-hidden="true"></i> Dont blank email and Enter correct email'
        document.getElementById('para-email').style.display = "block"
    }
    else if (Email.match(Emailformat)) {
        document.getElementById('para-email').style.display = "none"
    }

    if (content.trim() == '') {
        document.querySelector('#query').style.border = "1px solid red"
        document.getElementById('para-content').innerHTML = '<i class="fa fa-exclamation" aria-hidden="true"></i> Enter your thoughts'
        document.getElementById('para-content').style.display = "block"
        // alert('enter something')
    } else if (content.trim() !== '') {
        document.getElementById('para-content').style.display = "none"

    }

}

