let buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {

    button.addEventListener("mouseenter", function() {
        button.style.backgroundColor = "hsl(25, 97%, 53%)";
    });

    button.addEventListener("mouseleave", function() {
        button.style.backgroundColor = "";
    });

});
console.log ('js');
