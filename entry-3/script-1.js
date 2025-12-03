let myElem = document.getElementById("writeBox");
let receipeInput = document.getElementById("receipe");

function doSomething() {
    myElem.innerHTML = receipeInput.value;
}