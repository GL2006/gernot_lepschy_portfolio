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
        prog_title :"Programmiersprachen:",
        prog_list: `<li>Java:<ul><li>Viele <a href ="projects.html">Projekte</a></li><li>In Softwareentwicklung I an der Uni Sehr gut abgeschlossen</li></ul></li>
            <li>C#:<ul><li>Spieleprogrammierung mittels Unity</li><li>Erstellung von Microsoft Applikationen (Universal Windows Platform)</li></ul></li>
            <li>SQL:<ul><li>An der Uni in Datenmodellierung</li><li>Einfache und komplexe Queries</li><li>Erstellung von Datenbankschemata</li>
            <li>Postgres hauptsächlich</li></ul></li><li>Python:<ul><li>Einfache Terminalapplikationen</li></ul></li><li>JavaScript:<ul>
            <li>für diese Website/ basics</li></ul></li><li>HTML<ul><li>Diese Website</li>
            <li>In Kombination mit Java und Jakarta Server Pages (.jsp) für Webviews von SQL</li></ul></li>
            `,
        others_title: "Anderes:",
        others_list: `<li><a href = "https://www.wko.at/unternehmerfuehrerschein">Unternehmerführerschein</a><ul><li>bei der WKO Oberösterreich</li>
            <li>Skills in Sachen Steuern/ Buchhaltung</li></ul></li><li>Rettungssanitäter<ul><li>Freiwilliges Engagement beim Roten Kreuz</li>
            <li>Dort auch 9 Monate Zivildienst absolviert.</li></ul></li><li>Sprachen:<ul><li>Deutsch: Muttersprache</li>
            <li>Englisch: Augezeichnet in Schrift und Sprache (bei Matura sehr gut)</li><li>Französisch: Gesprächssicher</li>
            <li>Spanisch: Anfängerlevel</li><li>Latein: Grundzüge</li><li>Indonesisch: Grundzüge (Duolingo)</li></ul></li><li>Führerschein Klasse B
            & AM</li><li>Video-Editing</li><li>Debattieren</li>
            `

    },
    en: {
        prog_title :"Programming languages:",
        prog_list: `<li>Java:<ul><li>Many <a href ="projects.html">projects</a></li><li>In Softwaredevelopment I at University: passed Excellent</li></ul></li>
            <li>C#:<ul><li>Game development through Unity</li><li>Microsoft Applications (Universal Windows Platform)</li></ul></li>
            <li>SQL:<ul><li>Data-modelling at university</li><li>Simple & complex Queries</li><li>Creating database schemas</li>
            <li>Postgres mainly</li></ul></li><li>Python:<ul><li>Easy Terminal-Apllications</li></ul></li><li>JavaScript:<ul>
            <li>for this Website/ basics</li></ul></li>
            <li>HTML<ul><li>This Website</li><li>In combination with Java & Jakarta Server Pages (.jsp) for Webviews of SQL</li></ul></li>
            `,
        others_title: "Other:",
        others_list: `<li><a href = "https://www.wko.at/unternehmerfuehrerschein">Unternehmerführerschein</a>/Entrepreneur certificate
            <ul><li>at WKO Upper Austria</li>
            <li>Skills in taxes/ accounting</li></ul></li><li>Rettungssanitäter/Paramedic<ul><li>Volunteering at the Red Cross</li>
            <li>Completion of 9 months of civil service there</li></ul></li><li>Languages:<ul><li>German: native</li>
            <li>English: excellent (at the A-levels excellent)</li><li>French: ready to converse</li>
            <li>Spanich: beginner</li><li>Latin: basics</li><li>Indonesian: basics (Duolingo)</li></ul></li><li>Driverslicense classe B
            & AM (car & motorbike)</li><li>Video-Editing</li><li>Debating</li>
            `
    }
};

function setLanguage (lang){
    language = lang;
    localStorage.setItem("language", lang);
    updateText();
}

function updateText(){
    document.getElementById("prog_title").innerText = texts[language].prog_title;
    document.getElementById("prog_list").innerHTML  = texts[language].prog_list;
    document.getElementById("others_title").innerText = texts[language].others_title;
    document.getElementById("others_list").innerHTML  = texts[language].others_list;
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