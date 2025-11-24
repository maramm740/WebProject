function openForm() {
    document.getElementById("form").style.display = "block";
}

let lang = "ar";

function switchLang() {
    if (lang === "ar") {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.getElementById("title").innerText = "Visitors Feedback";
        document.getElementById("main-btn-text").innerText = "Share your experience";
        document.querySelector(".lang-btn").innerText = "العربية";

        lang = "en";
    } else {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.getElementById("title").innerText = "آراء الزوار";
        document.getElementById("main-btn-text").innerText = "شاركنا تجربتك";
        document.querySelector(".lang-btn").innerText = "English";

        lang = "ar";
    }
}