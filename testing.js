//fruits existants et leurs couleurs
const fruits = {
    "pomme": "rouge",
    "bannane": "jaune",
    "poire": "vert"
};

//Panier avec des fruits
const panier = ["pomme", "poire"];

// -> Vérifier quels fruits existants sont dans le panier
// EX:
// pomme dans panier? true
// bannane dans panier? false

// Si un fruit existant est dans le panier, console log le fruit et sa couleur, sinon
// console log "ce fruit n'est pas dans le panier".

for ([a, b] of Object.entries(fruits)) {
    console.log(a + " : " + b);
}

for ([a, b] of panier.entries()) {
    console.log(a + " : " + b);
}