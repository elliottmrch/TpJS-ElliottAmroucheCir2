// const data = await fetch("./data/data.json")
//     .then(response => response.json())
//     .catch(error => alert("Erreur : " + error));

let main = document.querySelector("main");
let myInput = document.querySelector("select");

loadData(1);
myInput.addEventListener('change', (event) => {
    console.log(myInput.value);
    let numGeneration = event.target.value;
    main.innerHTML = "";
    loadData(numGeneration);
});

async function loadData(numGeneration = 1) {
    const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${numGeneration}`)
        .then(response => response.json())
        .catch(error => alert("Erreur : " + error));

    console.log(data);

    for (let i = 0; i < data.length; i++) {
        let article = document.createElement("article");

        article.innerHTML = `
                <figure>
                    <picture>
                        <img alt="Image ${data[i].name}"
                             src="${data[i].image}"/>
                    </picture>
                    <figcaption>
                        <span class="types">${data[i].apiTypes.map(t => t.name).join(' / ')}</span>
                        <h2>${data[i].name}</h2>
                        <ol>
                            <li>Points de vie : ${data[i].stats.HP}</li>
                            <li>Attaque : ${data[i].stats.attack}</li>
                            <li>Défense : ${data[i].stats.defense}</li>
                            <li>Attaque spécial : ${data[i].stats.special_attack}</li>
                            <li>Vitesse : ${data[i].stats.speed}</li>
                        </ol>
                    </figcaption>
                </figure>
    `;

        switch (data[i].apiTypes[0].name) {
            case "Plante":
                article.style.backgroundColor = "#78C850";
                article.style.border = "#78C850 solid 10px";
                break;
            case "Feu":
                article.style.backgroundColor = "#F08030";
                article.style.border = "#F08030 solid 10px";
                break;
            case "Eau":
                article.style.backgroundColor = "#6890F0";
                article.style.border = "#6890F0 solid 10px";
                break;
            case "Insecte":
                article.style.backgroundColor = "#A8B820";
                article.style.border = "#A8B820 solid 10px";
                break;
            case "Normal":
                article.style.backgroundColor = "#A8A878";
                article.style.border = "#A8A878 solid 10px";
                break;
            case "Poison":
                article.style.backgroundColor = "#A040A0";
                article.style.border = "#A040A0 solid 10px";
                break;
            case "Électrik":
                article.style.backgroundColor = "#F8D030";
                article.style.border = "#F8D030 solid 10px";
                break;
            case "Sol":
                article.style.backgroundColor = "#E0C068";
                article.style.border = "#E0C068 solid 10px";
                break;
            case "Fée":
                article.style.backgroundColor = "#EE99AC";
                article.style.border = "#EE99AC solid 10px";
                break;
            case "Combat":
                article.style.backgroundColor = "#C03028";
                article.style.border = "#C03028 solid 10px";
                break;
            case "Psy":
                article.style.backgroundColor = "#F85888";
                article.style.border = "#F85888 solid 10px";
                break;
            case "Roche":
                article.style.backgroundColor = "#B8A038";
                article.style.border = "#B8A038 solid 10px";
                break;
            case "Spectre":
                article.style.backgroundColor = "#705898";
                article.style.border = "#705898 solid 10px";
                break;
            case "Glace":
                article.style.backgroundColor = "#98D8D8";
                article.style.border = "#98D8D8 solid 10px";
                break;
            case "Dragon":
                article.style.backgroundColor = "#7038F8";
                article.style.border = "#7038F8 solid 10px";
                break;
            case "Acier":
                article.style.backgroundColor = "#B8B8D0";
                article.style.border = "#B8B8D0 solid 10px";
                break;
            case "Ténèbres":
                article.style.backgroundColor = "#705848";
                article.style.border = "#705848 solid 10px";
                break;
            case "Vol":
                article.style.backgroundColor = "#A890F0";
                article.style.border = "#A890F0 solid 10px";
                break;
            default:
                article.style.backgroundColor = "lightgray";
                article.style.border = "lightgray solid 10px";
        }

        main.appendChild(article);
    }
}