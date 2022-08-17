console.log("01 - function");

let nombre1 = 10;
let nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

let resultat1 = additionner(nombre1, nombre2);

console.log(resultat1);

let somme = additionner;

let resultat2 = somme(nombre1, nombre2);

console.log(resultat2);

let multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}

console.log(multiplication(nombre1, nombre2));

let afficherOperation = function (nomOperation, operation, nb1, nb2) {
    console.log(`${nomOperation}(${nb1}, ${nb2}) = ${operation(nb1, nb2)}`);
}

afficherOperation("Somme", somme, 20, 40);

afficherOperation("Soustraction", ((nb1, nb2) => nb1 - nb2), 15, 5);