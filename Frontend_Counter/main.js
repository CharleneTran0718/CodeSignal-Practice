console.log("JavaScript gets executed automatically when the preview re-renders");

let counter = document.getElementById("counter");
let clickButton = document.querySelector("button"); 
let count = 0;

clickButton.addEventListener("click", function() {
    count++;
    counter.innerText = count;
});
