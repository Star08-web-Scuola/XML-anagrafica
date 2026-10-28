document.addEventListener("DOMContentLoaded", () => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            load(this);
        }
    };

    xhr.open("GET", "utenti.xml", true);
    xhr.send();
});

function load(xml) {
    let content = xml.responseXML;
    let usr = content.getElementsByTagName("utente");
    let tab = document.getElementById("abody");
    let bdy = "";
    
    for (let i = 0; i < 6 && i < usr.length; i++) {
        let nome = usr[i].getElementsByTagName("nome")[0]?.textContent;
        let cognome = usr[i].getElementsByTagName("cognome")[0]?.textContent;
        let ddn = usr[i].getElementsByTagName("ddn")[0]?.textContent;

        bdy += `<tr><td>${nome}</td><td>${cognome}</td><td>${ddn}</td></tr>`;
    }
    tab.innerHTML = bdy;
}