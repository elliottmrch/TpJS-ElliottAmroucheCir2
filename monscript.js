let i = 0;
let result = 0;
while (i < 100) {
    i += 1;
    result += i;
}
console.log(result);


// let nbr = prompt("Entrer un nombre entre 1 et 100");
// if (nbr < 1 || nbr > 100 || isNaN(nbr)) {
//     console.log("Nombre invalide");
// } else {
//     let i2 = 0;
//     let result2 = 0;
//     do {
//         i2 += 1;
//         result2 += i2;
//     } while (i2 < nbr);
//     console.log(result2);
// }

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(tab[0]);
console.log(tab[1]);
console.log(tab[2]);
console.log(tab[3]);
console.log(tab[4]);
console.log(tab[5]);
console.log(tab[6]);
console.log(tab[7]);

for (let i3 = 0; i3 < 8; i3++) {
    console.log(tab[i3]);
}

for (let i3 = 0; i3 < tab.length; i3++) {
    console.log(tab[i3]);
}