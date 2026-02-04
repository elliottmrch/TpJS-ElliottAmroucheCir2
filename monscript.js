let number = 5;
let text = '5';
let isRainingToday = true;

if (number == text) {
    console.log("égal avec ==");
} else {
    console.log("pas égal avec ==");
}

if (number === text) {
    console.log("égal avec ===");
} else {
    console.log("pas égal avec ===");
}

if (isRainingToday) {
    console.log("Where is my umbrella?");
}

let age = prompt("Quel âge as-tu ?");

if (age > 0 && age < 18) {
    alert(`L’utilisateur a ${age} an(s), il est mineur!`);
} else if (age >= 18 && age < 62) {
    alert(`L’utilisateur a ${age} an(s), il est majeur!`);
} else if (age >= 62) {
    alert(`L’utilisateur a ${age} an(s), il est majeur mais aussi retraité !!`);
} else {
    alert("L'âge saisi n'est pas valide.");
}