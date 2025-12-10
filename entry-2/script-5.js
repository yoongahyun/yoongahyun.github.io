document.addEventListener("DOMContentLoaded", () => {
 
    const words = document.querySelectorAll(".Text1 h2, .Text2 h2, .Text3 h2");

  
    words.forEach(w => w.classList.add("fadeWord"));

    function revealWords() {
       
        words.forEach(w => w.classList.remove("show"));

    
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add("show");
            }, index * 700);
        });
    }

    revealWords();

    const totalTime = words.length * 700 + 500;
    setInterval(revealWords, totalTime);
});

//:this was from a youtube tutorial://