export default class Type {
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