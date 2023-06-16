const buttonRef = document.querySelector(".fourAnswerButtonJS");

buttonRef.addEventListener("click", helloWorld);

function helloWorld(callback) {
 alert("Hello World!");

 callback(helloWorld);
}