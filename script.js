document.addEventListener("DOMContentLoaded", () => {
    const dynamicBoxesContainer = document.getElementById("dynamic-boxes");

    const quotes = [
        "Faith is taking the first step even when you don't see the whole staircase.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The best way to predict the future is to create it.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Perseverance is not a long race; it is many short races one after the other.",
        "Believe you can and you're halfway there.",
        "Your faith can move mountains, and your doubt can create them."
    ];

    quotes.forEach((quote) => {
        const box = document.createElement("div");
        box.className = "box";
        const text = document.createElement("p");
        text.className = "box-text";
        text.textContent = quote;
        box.appendChild(text);
        dynamicBoxesContainer.appendChild(box);
    });
});
