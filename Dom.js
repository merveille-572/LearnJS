// SELECTEURS EN JS
// document.querySelector('body').style.background='green'
//  les evenements sur le click = click event
const questionContainer =document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click",() => {
    response.style.visibility = "visible";
});
btn2.addEventListener("click", () =>{
    console.log("click");
});
