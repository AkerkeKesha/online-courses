import 'bootstrap';
import style from "./main.css";

Array.from(document.getElementsByClassName("collapsible")).forEach(
    collapsible => collapsible.addEventListener("click", () => {
        collapsible.classList.toggle("active");
        const content = collapsible.parentElement.nextElementSibling;
        console.log(content);
        content.style.display = content.style.display === "block"
            ? "none": "block";
  })
);