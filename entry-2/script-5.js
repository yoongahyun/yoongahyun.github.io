document.addEventListener("DOMContentLoaded", () => {
    // Select just THESE words
    const words = document.querySelectorAll(".Text1 h2, .Text2 h2, .Text3 h2");

    // Add fadeWord class
    words.forEach(w => w.classList.add("fadeWord"));

    function revealWords() {
        // Hide all first
        words.forEach(w => w.classList.remove("show"));

        // Reveal one-by-one
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add("show");
            }, index * 700);
        });
    }

    // First run
    revealWords();

    // Loop forever
    const totalTime = words.length * 700 + 500;
    setInterval(revealWords, totalTime);
});