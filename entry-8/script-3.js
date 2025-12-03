document.body.addEventListener("click", function (event) {

    const tomato = document.createElement("img");
    tomato.src = "tomato.png";
    tomato.classList.add("tomato");


    tomato.style.left = event.pageX + "px";
    tomato.style.top = event.pageY + "px";

    document.body.appendChild(tomato);
});

/*I watched a tut for this*/