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
        title: "IT-Projekte",
        project_core_list:`<li>Entwicklung von 2021 bis 2023</li>
            <li>3D Action Gameplay mit Unity 3D und C#</li>
            <li>Animationen und 3D-Modelle mit Blender</li>
            <li>Musik mit LMMS</li>
            <li>Verfügbar über den <a href="https://apps.microsoft.com/detail/9nkzwt6jxht6" target="_blank">Microsoft Store</a> & 
                <a href="https://gl2006.itch.io/project-core" target="_blank">itch.io</a></li>
            <li><a href="https://sites.google.com/view/project-core" target="_blank">Offizielle Webseite</a></li>
            `,
        java_img_list: `<li>Kleines Projekt zur Bildbearbeitung </li>
            <li>Kontrast, Helligkeit, Highlights, Schatten, usw. anpassbar</li>
            <li>Dithering und ASCII, außerdem Gradient und Threshold Effekte</li>  
            <li><a href="DownloadableFiles/ImageEditorGernotLepschy.zip" download>Download für das Projekt</a></li>      
            `,
        java_rt_list: `<li>Projekt zum Rendering von 3D Szenen mit Java </li>
            <li>Parallele Ausführung</li>
            <li>Manuelle Eingabe über Main-Klasse</li>
            <li>.obj-Dateien weden unterstützt</li>
            <li><a href="DownloadableFiles/code.pdf" download>Download für den Code (kein User Interface implementiert)</a></li>
            <li><a href="DownloadableFiles/JavaRayTracerDemo.zip" download>Download des Projekts (kein User Interface implementiert)</a></li>
            `,
        java_crpg_list: `<li>Kleines Konsolen Spiel</li>
            <li>Nutzt eine abgespeckte Variante des 3D-Renderers</li>
            <li>Kämpfe und 3D Exploration</li>
            <li><a href="DownloadAbleFiles/consoleRPG.zip" download> Download des Projekts</a></li>
        `,
        free_list: `<li>Kleine Website</li>
            <li>Displayed mithilfe von HTML und JavaScript Standorte für gratis Sachen auf einer Karte meines Uni-Campus'</li>
            <li>Ursprünglich mithilfe von JSP und Oracle SQL Server umgesetzt</li>
            <li>Dann auf HMTL+JS für Frontend portiert und ein Backend mithilfe von <a href = "https://supabase.com/" supabase>supabase</a>-SQL</li>
            <li>Anlegen von Feldern auf der Karte, Abrufen dieser und nach 3,5h wird es in eine zweite Tabelle verschoben</li>
            <li>Addresse: <a href = "https://gl2006.github.io/free_stuff-jku/" free_stuff@jku>free_stuff@jku</a></li>
        `,
        java_stat_list: `<li>Projekt zur Berechnung von Wahrscheinlichkeiten</li><li>Approximation der Normalverteilung</li>
            <li>genaue Berechnung der Binomialverteilung</li><li>Terminal User Interface</li>
            <li><a href="DownloadableFiles/StatisticsProject.zip" download>Download für das Projekt</a></li>
            `,
        urpg_list: `<li>Neues Spielentwicklungsprojekt</li><li>Wieder Unity 3D und C# mit 3D Modellen aus Blender</li>
            <li>Rundenbasiertes Rollenspiel (RPG)</li><li>3D Erkundung & Rätsel</li>
            <li>Release auf itch.io & im Microsoft Store sicher, Steam eventuell</li>
            <li>Geplante Fertigstellung Anfang 2027 (Stand jetzt)</li>
            `

    },
    en: {
        title: "IT-Projects",
        project_core_list:`<li>Development from 2021 to 2023</li>
            <li>3D Action Gameplay with Unity 3D and C#</li>
            <li>Animations and 3D-Models with Blender</li>
            <li>Music with LMMS</li>
            <li>Available on the <a href="https://apps.microsoft.com/detail/9nkzwt6jxht6" target="_blank">Microsoft Store</a> & 
                <a href="https://gl2006.itch.io/project-core" target="_blank">itch.io</a></li>
            <li><a href="https://sites.google.com/view/project-core" target="_blank">Official Website</a></li>
            `,
        java_img_list: `<li>Little project for image editing </li>
            <li>Contrast, Brightness, Highlights, Shadows, etc. can be edited</li>
            <li>Dithering and ASCII, also Gradient and Threshold effects</li>  
            <li><a href="DownloadableFiles/ImageEditorGernotLepschy.zip" download>Download the project</a></li>      
            `,
        java_rt_list: `<li>Project to render 3D scenes with Java </li>
            <li>Parallel Execution</li>
            <li>Manual Input through Main-Class</li>
            <li>.obj files supported</li>
            <li><a href="DownloadableFiles/code.pdf" download>Download code (no user interface implemented)</a></li>
            <li><a href="DownloadableFiles/JavaRayTracerDemo.zip" download>Download project (no user interface implemented)</a></li>
            `,
        java_crpg_list: `<li>Little Console-RPG Game</li>
            <li>Uses a downgraded version of the Java 3D-Render</li>
            <li>Fights and 3D Exploration</li>
            <li><a href="DownloadAbleFiles/consoleRPG.zip" download> Download project</a></li>
        `,
        free_list: `<li>Small Website</li>
            <li>Displaying the location of free stuff on my uni campus using HTML and JavaScript</li>
            <li>Originally implemented with JSP and Oracle SQL Server</li>
            <li>Then ported to HMTL+JS for Frontend and Backend with <a href = "https://supabase.com/" supabase>supabase</a>-SQL</li>
            <li>Creation of markers on the map, fetching them and transferring them to a second table after 3,5hrs</li>
            <li>Adress: <a href = "https://gl2006.github.io/free_stuff-jku/" free_stuff@jku>free_stuff@jku</a></li>
        `,
        java_stat_list: `<li>Project to calculate probabilities</li><li>Approximation of the Normal Distribution</li>
            <li>exact Binomial Distribution/li><li>Terminal User Interface</li>
            <li><a href="DownloadableFiles/StatisticsProject.zip" download>Download for the Project</a></li>
            `,
        urpg_list: `<li>New Game-Development-Project</li><li>Again Unity 3D and C# with 3D-Models from Blender</li>
            <li>Turnbased Roleplaying-Game (RPG)</li><li>3D Exploration & Puzzles</li>
            <li>Release on itch.io & on the Microsoft Store guaranteed, Steam maybe</li>
            <li>Expected release in the beginning of 2027 (as of now)</li>
            `
    }
};

function setLanguage (lang){
    language = lang;
    localStorage.setItem("language", lang);
    updateText();
};

function updateText(){
    document.getElementById("title").innerText = texts[language].title;
    document.getElementById("project_core_list").innerHTML  = texts[language].project_core_list;
    document.getElementById("java_img_list").innerHTML  = texts[language].java_img_list;
    document.getElementById("java_rt_list").innerHTML = texts[language].java_rt_list;
    document.getElementById("java_stat_list").innerHTML = texts[language].java_stat_list;
    document.getElementById("urpg_list").innerHTML = texts[language].urpg_list;
    document.getElementById("java_crpg_list").innerHTML = texts[language].java_crpg_list;
    document.getElementById("free_list").innerHTML = texts[language].free_list;
};
function toggleDarkMode(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}
updateText();
