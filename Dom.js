// SELECTEURS EN JS
// document.querySelector('body').style.background='green'
//  les evenements sur le click = click event
const questionContainer =document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click",() => {
    response.classList.add('show-response');
    response.style.background = "green"
});
btn2.addEventListener("click", () =>{
    response.classList.add('show-response');
    response.style.background = "red";
});

// mousemove les evenements

const mousemove= document.querySelector(".mousemove");
window.addEventListener("mousemove",(e) =>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top
     = e.pageY +  "px";
})
window.addEventListener("mousedown", () =>{
mousemove.style.transform = "scale(2) translate(-50%, -50%);";
} )