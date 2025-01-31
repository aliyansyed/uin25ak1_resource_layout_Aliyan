console.log(resources)
const navigasjonselementer = document.querySelectorAll(".navigation li");
const innhold = document.getElementById("content");

let innholdHTML = "";

function oppdaterInnhold(kategori) {
    const valgtRessurs = resources.filter(ressurs => ressurs.category === kategori)[0];

    if (valgtRessurs) {
        innholdHTML = `<h1>${valgtRessurs.category}</h1>
                       <p>${valgtRessurs.text}</p>
                       <ul>`;

        valgtRessurs.sources.map(kilde => {
            innholdHTML += `<li><a href="${kilde.url}" target="_blank">${kilde.title}</a></li>`;
        });

        innholdHTML += `</ul>`;
    }

    innhold.innerHTML = innholdHTML;
}

oppdaterInnhold("HTML");

navigasjonselementer.forEach(element => {
    element.addEventListener("click", () => {
        navigasjonselementer.forEach(nav => nav.classList.remove("selected"));
        element.classList.add("selected");
        oppdaterInnhold(element.textContent.trim());
    });
});
