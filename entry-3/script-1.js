
let receipeInput = document.getElementById("receipe");

function doSomething() {
    const text = receipeInput.value;
    myElem.innerHTML = text;
}




//:typewriter effect credit on slideshow://
function typeWriter(element, speed = 35) {
    return new Promise(resolve => {
        const html = element.innerHTML.trim();
        const words = html.split(" ");
        element.innerHTML = "";

        let index = 0;

        function addWord() {
            if (index < words.length) {
                element.innerHTML += (index === 0 ? "" : " ") + words[index];
                index++;
                setTimeout(addWord, speed);
            } else {
                resolve();
            }
        }

        addWord();
    });
}

window.onload = async function() {
    const topText = document.querySelector(".top-text");
    const bottomText = document.querySelector(".bottom-text");


    await typeWriter(topText, 50);
 
    bottomText.style.opacity = "1";

    await typeWriter(bottomText, 50);
};