/**
 * ES 5
 * Classe menber avec les données pour le constructeur
 * @param {*} id 
 * @param {*} name 
 * @param {*} grade 
 */

let member = function (id, name, grade) {
    /**
     * Données globales de ma classe : publiques par défaut
     */
    this.id = id
    this.name = name
    this.grade = grade
    this.toString = () => {
        return 'ID: ' + this.id + ', Name: ' + this.name + ', Grade: ' + this.grade + '.';
    }
}


function team() {
    //this.members = [];
    /*this.add = (member) => {
        this.members.push(member);
    }
    this.printTeam = () => {
        let teamElement = document.getElementById('team');
        this.members.forEach(member => {
            let newP = document.createElement('p');
            newP.textContent = member.toString();
            teamElement.appendChild(newP);
        });
    }*/
}

team.prototype.members = []

team.prototype.add = (member) => {
        team.prototype.members.push(member);
    }
/**
 * let teamElement = document.getElementById('team'); Récupère une balise HTML avec l'id = team
 * On ajoute un noeud (balise <p></p>) dans la teamElement pour chaque item du tableau 
 * team.prototype.members
 */	
team.prototype.printTeam = () => {
        let teamElement = document.getElementById('team');
        team.prototype.members.forEach(member => {
            let newP = document.createElement('p');
            newP.textContent = member.toString();
            teamElement.appendChild(newP);
});}

let myFamily = new team();

myFamily.add(new member(1, 'Marc', 'Papa'));
myFamily.add(new member(2, 'Yolaine', 'Maman'));
myFamily.add(new member(3, 'Jean Baptiste', 'fils'));
myFamily.add(new member(4, 'Blandine', 'fille'));
myFamily.add(new member(5, 'Marie-Reine', 'fille'));
myFamily.add(new member(6, 'François', 'fils'));
myFamily.add(new member(7, 'Agnès', 'fille'));

/**
 * J'appelle lors du chargement du DOM "DOMContentLoaded" : myFamily.printTeam
 */
document.addEventListener('DOMContentLoaded', myFamily.printTeam);
