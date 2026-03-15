const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (hamButton.textContent === "☰") {
        hamButton.textContent = "X";
    } else {
        hamButton.textContent = "☰";
    }
});

/* Footer dynamic year */

document.querySelector("#year").textContent = new Date().getFullYear();

/* Last modified */

document.querySelector("#lastModified").textContent = document.lastModified;
