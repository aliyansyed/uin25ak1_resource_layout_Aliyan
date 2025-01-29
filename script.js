console.log(resources);

// Standard kategori som vises ved oppstart
let selectedCategory = "HTML";
updateContent(selectedCategory);

// Legg til event listeners for kategori-knappene
document.querySelectorAll(".navigation li").forEach(item => {
    item.addEventListener("click", function () {
        // Fjern "selected"-klassen fra alle og legg til på den valgte
        document.querySelectorAll(".navigation li").forEach(li => li.classList.remove("selected"));
        this.classList.add("selected");

        // Oppdater innhold basert på valgt kategori
        selectedCategory = this.getAttribute("id"); // Bruker id som kategori
        updateContent(selectedCategory);
    });
});

// Funksjon for å oppdatere innholdet dynamisk
function updateContent(category) {
    const selectedResource = resources.find(resource => resource.category === category);

    if (selectedResource) {
        document.querySelector("#content h1").textContent = selectedResource.category;
        document.querySelector("#content p").textContent = selectedResource.text;

        let resourceHTML = selectedResource.sources.map(source =>
            `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
        ).join("");

        document.querySelector("#content ul").innerHTML = resourceHTML;
    }
}
