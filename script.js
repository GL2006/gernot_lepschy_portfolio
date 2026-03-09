let language = localStorage.getItem("language") || "de";
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    if(savedTheme === "dark"){
        document.body.classList.add("darkmode");
    }else{
        localStorage.setItem("theme","light");
    }
}else{
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add("darkmode");
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}

const texts = {
    de: {
        title: "Gernot Lepschy",
        description: "Wirtschaftsinformatik Student an der JKU in Linz & Softwareentwickler",
        about_title: "Über mich:",
        about_list: `<li>Wirtschaftsinformatik Student an der <a href = "https://www.jku.at/">JKU</a> (2.Semester)</li>
            <li>Hauptinteressen: Software- & Spieleentwicklung</li>
            <li><a href ="skills.html">Skills</a>: Java, C#, SQL, Python, JavaScript, HTML</li>
            <li>3D-Modellierung & Animationen</li>
            <li>Engagement beim Roten Kreuz</li>
            <li><a href ="projects.html">Meine Projekte</a></li>
            <li><a href ="about.html">Über mich</a></li>
            <li><a href ="contact.html">Kontaktdaten</a></li>`

    },
    en: {
        title: "Gernot Lepschy",
        description: "Business Informatics Student at JKU Linz & Software Developer",
        about_title: "About me:",
        about_list: `<li>Business Informatics Student at  <a href = "https://www.jku.at/">JKU</a> Linz (second Semester)</li>
            <li>Focus: Software- & Game-Development</li>
            <li><a href ="sklils.html">Skills</a>: Java, C#, SQL, Python, JavaScript, HTML</li>
            <li>3D-Modelling & Animations</li>
            <li>Voluteering at Red Cross</li>
            <li><a href ="projects.html">My Projects</a></li>
            <li><a href ="about.html">About me</a></li>
            <li><a href ="contact.html">Contact</a></li>`
    }
};

function setLanguage (lang){
    language = lang;
    localStorage.setItem("language", lang);
    updateText();
}

function updateText(){
    document.getElementById("title").innerText = texts[language].title;
    document.getElementById("description").innerText = texts[language].description;
    document.getElementById("about_title").innerText = texts[language].about_title;
    document.getElementById("about_list").innerHTML  = texts[language].about_list;
}
function toggleDarkMode(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}
updateText();