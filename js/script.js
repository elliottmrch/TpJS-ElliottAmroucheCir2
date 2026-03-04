const data = await fetch("./data/data.json")
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));

console.log(data);

let main = document.querySelector("main");

for (let i = 0; i < data.length; i++) {
    let article = document.createElement("article");

    article.innerHTML = `
            <figure>
                <picture>
                    <img alt="Image ${data[i].name}"
                         src="${data[i].image}"/>
                </picture>
                <figcaption>
                    <span class="types">${data[i].apiTypes.map(t => t.name).join(' ')}</span>
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
            article.style.backgroundColor = "green";
            article.style.border = "green solid 10px";
            break;
        case "Feu":
            article.style.backgroundColor = "orange";
            article.style.border = "orange solid 10px";
            break;
        case "Eau":
            article.style.backgroundColor = "blue";
            article.style.border = "blue solid 10px";
            break;
    }

    main.appendChild(article);
}