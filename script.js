const h2 = document.createElement("h2");
h2.textContent = `This content added by JavaScript`;

document.getElementById("center").appendChild(h2);



// Black Out Game Code
const blackOutGameElementRed = document.getElementById("red");

    blackOutGameElementRed.addEventListener(`mouseenter`, function() {
    blackOutGameElementRed.style.background = "#FFFFFF";
    });
    blackOutGameElementRed.addEventListener(`mouseleave`, function() {
    blackOutGameElementRed.style.background = "#000000";
    });