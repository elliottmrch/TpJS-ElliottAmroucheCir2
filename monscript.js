/* Toutes les variables */
let li = document.querySelector("#listeCourses li");

let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR')

let h2 = document.querySelector("h2");
let titreH2 = h2.innerHTML;
h2.innerHTML = `${titreH2} : ${dateJourFr}`;

let myInput = document.querySelector("#myInput");
let btn = document.querySelector(".btn");
let liste = document.querySelector("#listeCourses");

/* Tous les évènements */
li.addEventListener('click', () => {
    li.classList.toggle("itemCheck");
})

btn.addEventListener('click', () => {
    addProduct();
})

myInput.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        addProduct();
    }
})

/* Les fonctions */
function addProduct() {
    let produit = myInput.value.trim();

    if (produit === "") {
        alert("Erreur de saisie");
        return;
    }

    let toutesLesLignes = document.querySelectorAll("#listeCourses li");
    let dejaDansLaListe = false;

    for (let li of toutesLesLignes) {
        let texteMinuscule = li.innerText.toLowerCase();
        let produitMinuscule = produit.toLowerCase();

        if (texteMinuscule === produitMinuscule || texteMinuscule.startsWith(produitMinuscule + " (x")) {
            dejaDansLaListe = true;

            if (li.innerText.includes("(x")) {
                let parties = li.innerText.split("(x");
                let quantiteActuelle = parseInt(parties[1]);
                li.innerText = produit + " (x" + (quantiteActuelle + 1) + ")";
            } else {
                li.innerText = produit + " (x2)";
            }
        }
    }

    if (!dejaDansLaListe) {
        let nvLi = document.createElement("li");
        nvLi.innerText = produit;

        nvLi.addEventListener('click', () => {
            nvLi.classList.toggle("itemCheck");
        });

        nvLi.addEventListener('dblclick', () => {
            nvLi.remove();
        });

        liste.appendChild(nvLi);
    }

    myInput.value = "";
}