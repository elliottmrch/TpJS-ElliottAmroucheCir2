let anneeNaissance = prompt("Quelle est votre année de naissance ?");

function calculAge(anneeNaissance) {
    let age = 2026 - anneeNaissance;
    return age;
}

let age = calculAge(anneeNaissance);

alert(`Vous avez ${age} ans en 2026 !`);