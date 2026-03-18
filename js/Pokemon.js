import Type from "./Type.js";

export default class Pokemon {
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