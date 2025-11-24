
document.querySelectorAll(".clickable").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


document.querySelectorAll(".more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let details = btn.nextElementSibling;
        details.style.display =
            details.style.display === "block" ? "none" : "block";
    });
});