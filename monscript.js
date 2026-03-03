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
    saveList();
})

li.addEventListener('dblclick', () => {
    if (li.innerText.includes("(x")) {
        let parties = li.innerText.split(" (x");
        let quantite = parseInt(parties[1]);
        if (quantite > 2) {
            li.innerText = parties[0] + " (x" + (quantite - 1) + ")";
        } else {
            li.innerText = parties[0];
        }
    } else {
        li.remove();
    }
    saveList();
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
                let parties = li.innerText.split(" (x");
                let quantiteActuelle = parseInt(parties[1]);
                li.innerText = parties[0] + " (x" + (quantiteActuelle + 1) + ")";
            } else {
                li.innerText = li.innerText + " (x2)";
            }
            saveList();
        }
    }

    if (!dejaDansLaListe) {
        let nvLi = document.createElement("li");
        nvLi.innerText = produit;

        nvLi.addEventListener('click', () => {
            nvLi.classList.toggle("itemCheck");
            saveList();
        });

        nvLi.addEventListener('dblclick', () => {
            if (nvLi.innerText.includes("(x")) {
                let parties = nvLi.innerText.split(" (x");
                let quantite = parseInt(parties[1]);
                if (quantite > 2) {
                    nvLi.innerText = parties[0] + " (x" + (quantite - 1) + ")";
                } else {
                    nvLi.innerText = parties[0];
                }
            } else {
                nvLi.remove();
            }
            saveList();
        });

        liste.appendChild(nvLi);
        saveList();
    }

    myInput.value = "";
}

function saveList() {
    let items = [];
    document.querySelectorAll("#listeCourses li").forEach(li => {
        items.push({
            texte: li.innerText,
            checked: li.classList.contains("itemCheck")
        });
    });
    localStorage.setItem("maListe", JSON.stringify(items));
}

function loadList() {
    let donnees = localStorage.getItem("maListe");
    if (!donnees) return;

    let items = JSON.parse(donnees);
    liste.innerHTML = "";

    items.forEach(item => {
        let nvLi = document.createElement("li");
        nvLi.innerText = item.texte;
        if (item.checked) nvLi.classList.add("itemCheck");

        nvLi.addEventListener('click', () => {
            nvLi.classList.toggle("itemCheck");
            saveList();
        });
        nvLi.addEventListener('dblclick', () => {
            if (nvLi.innerText.includes("(x")) {
                let parties = nvLi.innerText.split(" (x");
                let quantite = parseInt(parties[1]);
                if (quantite > 2) {
                    nvLi.innerText = parties[0] + " (x" + (quantite - 1) + ")";
                } else {
                    nvLi.innerText = parties[0];
                }
            } else {
                nvLi.remove();
            }
            saveList();
        });

        liste.appendChild(nvLi);
    });
}

loadList();