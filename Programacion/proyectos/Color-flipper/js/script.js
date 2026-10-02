document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".boton");
    const title = document.querySelector(".titulo");

    const colores = [
        "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", 
        "Cyan", "Magenta", "Lime", "Maroon", "Navy", "Olive", "Teal", "Turquoise", 
        "Violet", "Gold", "Silver", "Coral"
    ];

    function getRandomColor() {
        return colores[Math.floor(Math.random() * colores.length)];
    }

    button.addEventListener("click", function () {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        title.textContent = "Background color: " + newColor;
        title.style.color = newColor; 
        button.style.backgroundColor = newColor;
    });
});
