// JavaScript goes here.
// index stuff
let question2 = document.querySelector(".question2");
let option1q1 = document.querySelector(".oneq1");
let option2q1 = document.querySelector(".twoq1");
let option1q2 = document.querySelector(".oneq2");
let option2q2 = document.querySelector(".twoq2");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");

let choice1;
let choice2;

option1q1.addEventListener("click", function() {
    choice1 = 1;
    option1q1.disabled = true;
    option2q1.disabled = true;
    question2.style.display = "block";
});
option2q1.addEventListener("click", function() {
    choice1 = 2;
    option1q1.disabled = true;
    option2q1.disabled = true;
    question2.style.display = "block";
});
option1q2.addEventListener("click", function() {
    choice2 = "Stove";
    option1q2.disabled = true;
    option2q2.disabled = true;
    Checkresults();
});
option2q2.addEventListener("click", function() {
    choice2 = "fridge";
    option1q2.disabled = true;
    option2q2.disabled = true;
    Checkresults();
});

function Checkresults() {
    if (choice1 === 1) {
        if (choice2 === "Stove") {
            result1.style.display = "block";
        } else if (choice2 === "fridge") {
            result2.style.display = "block";
        }
    } else if (choice1 === 2) {
        if (choice2 === "Stove") {
            console.log(true)
            result3.style.display = "block";
        } else if (choice2 === "fridge") {
            result4.style.display = "block";
        }
    }
}