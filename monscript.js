let i = 0;
let result = 0;
while (i < 100) {
    i += 1;
    result += i;
}
console.log(result);


let nbr = prompt("Entrer un nombre entre 1 et 100");
if (nbr < 1 || nbr > 100 || isNaN(nbr)) {
    console.log("Nombre invalide");
} else {
    let i2 = 0;
    let result2 = 0;
    do {
        i2 += 1;
        result2 += i2;
    } while (i2 < nbr);
    console.log(result2);
}