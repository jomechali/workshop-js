let villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

console.log(villes);

villes.forEach(ville => console.log(ville));

console.log(villes.every(ville => ville.includes("a")));

console.log(villes.some(ville => ville.match('-')));

let villesSansTiretSansEspace = villes.filter(ville => !ville.match('-') && !ville.includes(" "));

console.log(villesSansTiretSansEspace);

let villesMajusculeSeTerminantParS = villes.filter(ville => ville.match('.+s')).map(ville => ville.toUpperCase());

console.log(villesMajusculeSeTerminantParS);
