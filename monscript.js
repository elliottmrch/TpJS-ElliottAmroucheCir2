let nomJour = "Mercredi";
let numJour = 4;
let nomMois = "Février";
let isHiver = true;

console.log(nomJour, numJour, nomMois, isHiver);

let tabJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let tabMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

console.log(tabJours[2], tabMois[1]);

let maDateV1 = {
    "jour": "Mercredi",
    "mois": "Février"
}

let maDateV2 = {}
maDateV2.jour = "Mercredi";
maDateV2.mois = "Février";

console.log(maDateV1.jour, maDateV1.mois, maDateV2.jour, maDateV2.mois);

let nbr1;
let nbr2;
let nbr3;
let nbr4;

nbr1 = 3;
nbr2 = 7;
nbr3 = 8;
nbr4 = 21;

console.log(nbr1 + nbr2);
console.log(nbr4 - nbr3);

nbr2 = nbr1 * nbr2;
console.log(nbr2);

nbr2 += 1;
console.log(nbr2);

console.log(nbr4 / nbr1);
console.log(nbr4 % nbr1);