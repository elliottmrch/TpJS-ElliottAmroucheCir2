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
    let produit = myInput.value;
    if (produit == "") {
        alert("Erreur de saisie");
    }
    //pas de doublon (majuscule et minuscule sont la même chose)
    else if (liste.innerHTML.toLowerCase().includes(produit.toLowerCase())) {
        alert("Produit déjà dans la liste");
    } else {
        alert("Produit ajouté")
        let nvLi = document.createElement("li");
        nvLi.innerHTML = produit;
        nvLi.addEventListener('click', () => {
            nvLi.classList.toggle("itemCheck");
        });
        liste.appendChild(nvLi);
        myInput.value = "";
        nvLi.addEventListener('dblclick', () => {
            nvLi.remove();
            alert("Produit supprimé");
        });
    }
}
