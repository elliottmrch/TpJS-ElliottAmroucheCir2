import Pokemon from "./Pokemon.js";

let main = document.querySelector("main");
let myInput = document.querySelector("select");
let types = document.querySelector("#types");
let sortInput = document.querySelector("#select-tri");

let selectedType = null;

loadTypes();
loadData(1);

myInput.addEventListener('change', (event) => {
    let numGeneration = event.target.value;
    main.innerHTML = "";
    loadData(numGeneration);
});

sortInput.addEventListener('change', () => {
    main.innerHTML = "";
    loadData(myInput.value, selectedType);
});

async function loadTypes() {
    const data = await fetch(`https://tyradex.app/api/v1/types`)
        .then(response => response.json())
        .catch(error => console.log("Erreur : " + error));

    types.innerHTML = "";

    data.forEach(type => {
        let typeName = type.name.fr;
        let typeImg = type.sprites;

        if (typeImg) {
            let typeDiv = document.createElement("div");
            typeDiv.innerHTML = `<img alt="${typeName}" src="${typeImg}">`;

            typeDiv.addEventListener("click", () => {
                selectedType = (selectedType === typeName) ? null : typeName;
                main.innerHTML = "";
                loadData(myInput.value, selectedType);
            });

            types.appendChild(typeDiv);
        }
    });
}

async function loadData(numGeneration = 1, typeFilter = null) {
    let rawData = await fetch(`https://tyradex.app/api/v1/gen/${numGeneration}`)
        .then(response => response.json())
        .catch(error => alert("Erreur : " + error));

    let pokemons = rawData.map(data => new Pokemon(data));

    if (typeFilter !== null) {
        pokemons = pokemons.filter(pokemon => pokemon.apiTypes.some(t => t.name === typeFilter));
    }

    let sortBy = sortInput.value;
    if (sortBy === "name") {
        pokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "hp") {
        pokemons.sort((a, b) => b.hp - a.hp);
    } else if (sortBy === "attack") {
        pokemons.sort((a, b) => b.attack - a.attack);
    } else if (sortBy === "type") {
        pokemons.sort((a, b) => a.apiTypes[0].name.localeCompare(b.apiTypes[0].name));
    }

    pokemons.forEach(pokemon => {
        main.appendChild(pokemon.displayCard());
    });
}