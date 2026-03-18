let main = document.querySelector("main");
let myInput = document.querySelector("select");
let types = document.querySelector("#types");
let sortInput = document.querySelector("#select-tri");

let selectedType = null;

class Type {
    constructor(data) {
        this.name = data.name;
        this.image = data.image;
        this.color = this.getColorHexa();
    }

    getColorHexa() {
        switch (this.name) {
            case "Plante":
                return "#78C850";
            case "Feu":
                return "#F08030";
            case "Eau":
                return "#6890F0";
            case "Insecte":
                return "#A8B820";
            case "Normal":
                return "#A8A878";
            case "Poison":
                return "#A040A0";
            case "Électrik":
                return "#F8D030";
            case "Sol":
                return "#E0C068";
            case "Fée":
                return "#EE99AC";
            case "Combat":
                return "#C03028";
            case "Psy":
                return "#F85888";
            case "Roche":
                return "#B8A038";
            case "Spectre":
                return "#705898";
            case "Glace":
                return "#98D8D8";
            case "Dragon":
                return "#7038F8";
            case "Acier":
                return "#B8B8D0";
            case "Ténèbres":
                return "#705848";
            case "Vol":
                return "#A890F0";
            default:
                return "lightgray";
        }
    }
}

class Pokemon {
    constructor(data) {
        this.id = data.pokedex_id;
        this.name = data.name.fr;
        this.image = data.sprites.regular;

        this.apiTypes = data.types ? data.types.map(t => new Type(t)) : [];

        this.hp = data.stats.hp;
        this.attack = data.stats.atk;
        this.defense = data.stats.def;
        this.special_attack = data.stats.spe_atk;
        this.speed = data.stats.vit;
    }

    displayCard() {
        let article = document.createElement("article");

        let mainColor = this.apiTypes.length > 0 ? this.apiTypes[0].color : "lightgray";

        article.style.backgroundColor = mainColor;
        article.style.border = `${mainColor} solid 10px`;

        let typesString = this.apiTypes.map(t => t.name).join(' / ');

        article.innerHTML = `
            <figure>
                <picture>
                    <img alt="Image ${this.name}" src="${this.image}"/>
                </picture>
                <figcaption>
                    <span class="types">${typesString}</span>
                    <h2>${this.name}</h2>
                    <ol>
                        <li>Points de vie : ${this.hp}</li>
                        <li>Attaque : ${this.attack}</li>
                        <li>Défense : ${this.defense}</li>
                        <li>Attaque spécial : ${this.special_attack}</li>
                        <li>Vitesse : ${this.speed}</li>
                    </ol>
                </figcaption>
            </figure>
        `;

        return article;
    }
}

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