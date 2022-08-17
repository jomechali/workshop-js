/**
 * Classe Made in ES5
 * 
 * J'ai une Classe Animal qui est un contructeur qui attend un paramètre 'espece'
 * et j'affecte cette variable à l'attribut public espece : this.espece = espece
 * 
 * D'utiliser le mot réservé this pour accéder aux méthodes ou/et attributs de 
 * ma classe.
 */

function Animal(espece="Inconnue") {
    let _age = 0; // Attributs privés
    this.espece = espece;
    this.setAge = (age) => _age = age;
    /**
     * 
     * @returns 
     */
    this.toString = () => `Animal dont l'espèce est : ${this.espece} ${_age}`;
}

/**
 * ES5 sur la notion de prototype
 */

Animal.prototype.age = 0;
Animal.prototype.calculAge = function() {this.age*3};

let monAnimalInconnu = new Animal();
let monAnimal = new Animal('Lion');
let monAnimal01 = new Animal('Lion 02');
monAnimal.age = 10;
console.log(monAnimal.toString());
monAnimal.setAge(40)
monAnimal01.setAge(10)
console.log(monAnimalInconnu.toString());
console.log(monAnimal.toString());
console.log(monAnimal01.toString());
console.log(monAnimal.calculAge());

/**
 * Passage de référence
 */

function calcul() {

}

let refC = calcul; //refC devient un alias de la fonction calcul -> callback

let refCAF = () => 0; //(arrow function : la variable refCAF est une fonction qui va retourner 0;

let maFonc = (nom, prenom) => {return {nom,prenom} }

/**
 * C'est une arrow function qui attend deux paramètres 
 * et qui retourn un objet ayant deux attributs nom et prenom
 */
console.log(maFonc('Christophe','Germain'));

