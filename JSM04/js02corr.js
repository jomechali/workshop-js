/**
 *  Script JS : interprété par un 
 * navigateur par exemple
 *  Séquentiel, synchrône ...
 */
/**
 * SCOPE GLOBAL de mon fichier script
 */
let $sousTitre = "DEMO"
let $monApp = `TITRE ${$sousTitre}`;


function afficheTitre() {
    /**
     * J'affiche dans le navigateur la 
     * valeur de la variable $monApp
     * en utilisant l'Objet par le 
     * navigateur :document -> à l'objet 
     * de notre page.
     */
    document.write($monApp);
}

function gererDiv01() {
    /**
     * Je récupére le noeud (ma balise) correspondant
     * à l'id = div01 (DOM HTML de ma page)
     */
    let div01 = document.getElementById("div01");
    let monTab = ["item 0", "item 1", "item 2", "CGE"];
    /*div01.innerHTML = 
    `
        <h1>DEMO STATIC HTML</h1>
        <h2>SUITE ....</h2>
    `;
    div01.innerText = "<h1>hhhh</h1>"*/
    div01.innerHTML = `
     <ul>
         <li> 
             ${monTab.join("</li><li>")}
         </li>
     </ul>
     `;

}

//afficheTitre();
//gererDiv01();

/**
 * CallBack
 * $ pour le scope global
 */
let $monTabNumerique = [10, 12, 25, 26];
/**
 * Fonction Anonyme affectée à la variable
 * globale every.
 * @param {*} element 
 * @param {*} index 
 * @param {*} array 
 * @returns 
 */
let every = function (element, index, array) {
    return element > 1;
};
let some = function (element, index, array) {
    return element === 12;
};

let filter = function (element, index, array) {
    return element >= 25;
};
/**
 * les méthodes de Array : [] en ES5
 * every
 * some
 * filter
 * reduce
 * foreach
 */
console.log($monTabNumerique.every(every));
console.log($monTabNumerique.some(some));
console.log($monTabNumerique.filter(filter));
/**
 * ArrowFunction = lambdas expression en Java
 * Fonction Flêchée  () => return
 * callback depuis ES5 ES6 utilisé les SPA
 * ANGULAR REACT VUEJS ...
 */
console.log($monTabNumerique.every(
    element => element > 1
));





