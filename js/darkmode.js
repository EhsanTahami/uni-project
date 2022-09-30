const toggle = document.getElementById('toggle');
const ball = document.getElementById('ball');
const test = document.getElementById('test');


toggle.addEventListener('click', () => {
    if (ball.style.left == "0px") {
        ball.style.left = "20.5px";
        ball.style.transition = ".3s linear";
    }
    else {
        ball.style.left = "0px";
        ball.style.transition = ".3s linear";
    }
    function DarkMode() {
        if (ball.style.left == "0px") {

            document.body.style.backgroundColor = "white";
            document.body.style.transition = ".3s linear";
            document.getElementById("a").style.color = "#000";
            document.getElementById("a").style.transition = ".3s linear";


        } else if (ball.style.left == "20.5px") {

            document.body.style.backgroundColor = "#7F8487";
            document.body.style.transition = ".3s linear";
            document.getElementById("a").style.color = "white";
            document.getElementById("a").style.transition = ".3s linear";
            const element = document.querySelector('.header-ul');
            element.style.Color = 'white';
    

            test.style.color = "white";
            test.style.transition = ".3s linear";
        }
    }
    DarkMode();
})