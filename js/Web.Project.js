let currentLang = "ar";

const langData = {
    ar: {
        dir: "rtl",
        title: "اكتشاف القصيم",
        desc: "دليل ذكي للمعالم، المطاعم، الكوفيهات، التجارب، خرائط، صور، تقييمات، وترشيحات أسبوعية.",
        btn1: "استكشف المعالم",
        btn2: "تجارب القصيم",
        langBtn: "English"
    },
    en: {
        dir: "ltr",
        title: "Discover Al-Qassim",
        desc: "A smart guide for landmarks, restaurants, cafés, experiences, maps, photos, reviews, and weekly recommendations.",
        btn1: "Explore Landmarks",
        btn2: "Experiences",
        langBtn: "العربية"
    }
};

document.getElementById("langToggle").onclick = function () {
    currentLang = currentLang === "ar" ? "en" : "ar";
    const d = langData[currentLang];

    document.body.setAttribute("dir", d.dir);
    document.getElementById("title").textContent = d.title;
    document.getElementById("desc").textContent = d.desc;
    document.getElementById("btn1").textContent = d.btn1;
    document.getElementById("btn2").textContent = d.btn2;
    document.getElementById("langToggle").textContent = d.langBtn;
};