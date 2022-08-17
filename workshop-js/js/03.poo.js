function Personne(prenom, nom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function () {
        return `${this.nom} ${this.prenom} ${this.pseudo}`;
    };
}

let jules = new Personne("Jules", "LEMAIRE", "jules77");
let paul = new Personne("Paul", "LEMAIRE", "paul44");

function afficherPersonne() {
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.pseudo);
}

console.log(jules.getNomComplet());
jules.pseudo = "jules44";

console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age);

jules.age = 30;

console.log(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}

console.log(jules.getInitiales());

let robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return `${this.nom} ${this.prenom} ${this.pseudo}`;
    }
}
afficherPersonne.call(robert);

function Client(numeroClient, prenom, nom, pseudo) {
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;
}

let steve = new Client("A01", "Steve", "LUCAS", "steve44");

afficherPersonne.call(steve);