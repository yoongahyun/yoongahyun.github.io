let images = [
    "soup.png",
    "pasta.png",
    "salmon.png",
    "curry.png"
];

function randomDinner() {
    let box = document.querySelector(".box");
    box.innerHTML = "";

    let randomIndex = Math.floor(Math.random() * images.length);

    let img = document.createElement("img");
    img.src = images[randomIndex];
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    box.appendChild(img);
}

document.getElementById("button").addEventListener("click", randomDinner);

document.getElementById("button").addEventListener("click", function ()
 {
    document.querySelector("p").style.display = "none";
    randomDinner();
});
