/**
 * Script JS : interprete par un navigateur
 * sequentiel, synchrone
 */

let $sousTitre = "soustitre";
let $monApp = `titre ${$sousTitre}`;
let $tableau = ["e1", "e2", "e3"];


function afficherTitre() {

    document.write($monApp);
}

function gererDiv01() {
    let div01 = document.getElementById("div01");
    div01.innerHTML = `
    <ul>
        <li>
        ${$tableau.join("</li><li>")}
        </li>
    </ul>
    
    `;//peut etre string normal, mais sera interprete comme code html

    //div01.innerText = "<h1>ceci n est pas du code</h1>";

}
//gererDiv01();
//afficherTitre();

let $tableauNumerique = [10, 12, 25, 30, 26];

let every = function (element, index, array) {
    return element > 1;
}

let some = function (element, index, array) {
    return element === 12;
}

let filter = function (element, index, array) {
    return element >= 25;
}

/*console.log($tableauNumerique.every(every));
console.log($tableauNumerique.some(some));
console.log($tableauNumerique.filter(filter));*/


function monClick(evt) {
    evt.preventDefault(); // bloque la transmission du formulaire
    console.log(evt);
}

//console.log(document.monFormulaire);

document.monFormulaire.bouton01.addEventListener("click", monClick);
