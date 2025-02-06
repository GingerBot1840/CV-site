document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('primary-menu');

    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menu.style.display = isExpanded ? 'none' : 'flex';
    });
});

/*Stap-voor-stap Uitleg:

Event Listener voor DOMContentLoaded:

Zorgt ervoor dat de code pas wordt uitgevoerd nadat de volledige HTML is geladen.
Elementen Selecteren:

const menuToggle: Selecteert de menuknop met id="menu-toggle".
const menu: Selecteert het navigatiemenu met id="primary-menu".
Click Event Listener Toevoegen:

Wanneer op de menuknop wordt geklikt, wordt een functie uitgevoerd.
Menu Toggle Functionaliteit:

isExpanded: Controleert de huidige status van het menu (uitgeklapt of niet).
menuToggle.setAttribute('aria-expanded', !isExpanded);: Wisselt de aria-expanded status voor toegankelijkheid.
menu.style.display: Wisselt de display-eigenschap van het menu tussen 'none' en 'flex'. */