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
        title: "Über mich:",
        description: "Ich wurde 2006 geboren und bin demnach nun schon beinahe 20 Jahre alt. Ich besuchte den Kindergarten und die Volksschule "+
            "in meinem Ort und ging anschließend zum Akademischen Gymnasium, wo ich dann auch 8 Jahre war. Im Juni 2024 schloss ich dies mit der "+
            "Matura ab und wurde durch meinen guten Schnitt (ausgezeichneter Erfolg) geehrt. Anschließend absolvierte ich meinen Zivildienst beim "+
            "Roten Kreuz. Seit Oktober 2025 studiere ich an der JKU in Linz Wirtschaftsinformatik. Das erste Semester konnte ich schon mit 40 ECTs "+
            "und einen Schnitt von 1,58 abschließen.<br><br>Ich interessierte mich schon lange für Videospiele und so entschloss ich mich 2021 neben "+
            "der Schule mein eigenes zu entwickeln. Daraus wurde dan Project CORE. In der Schule lernte ich nichts zum Programmieren, sondern lernte "+
            "ich alles durch Tutorials, v.A. auf YouTube. Dadurch (und durch meinen Unternehmerführerschein) fiel mir die Studienwahl ziemlich leicht. "+
            "<br><br>Ich schloss auch schon einige Praktika ab und arbeite derzeit immer samstags.<br><br>Ich mag Videospiele, Reisen, Zeit mit meiner "+
            "Freundin zu Verbringen und Autos."
    },
    en: {
        title: "About me:",
        description: "I was Born in 2006 and am thus already almost 20 years old. I went to the kindergarten and Primary school "+
            "in my town and afterwards attended the 'Akademisches Gymnasium' for 8 yearsa nd graduated in June of 2024 with the "+
            "Matura exam. I passed excelently and was honored as such too. Afterward I did my civil service at the "+
            "Red Cross. Since October of 2025 I attend JKU University and study Business Informatics "+
            "and could get an average of 1,58 in the first semester..<br><br>I always was interested in Video games and as such I made the decision in 2021 to "+
            "develop my own one besides School. Out of this Project CORE emerged. I did not learn anything about programming in School and learnt "+
            "all through tutorials (mostly on YouTube). Thus the decision what to study (and through my Unternehmerführerschein) was not hard. "+
            "<br><br>I also had many internships and I currently work on Saturdays.<br><br>I like videogames, travelling, spending time with my "+
            "girlfriend and cars."
    }
};

function setLanguage (lang){
    language = lang;
    localStorage.setItem("language", lang);
    updateText();
}

function updateText(){
    document.getElementById("title").innerText = texts[language].title;
    document.getElementById("description").innerHTML  = texts[language].description;
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