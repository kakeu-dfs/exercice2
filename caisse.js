//Declaration des variables
const budget =20000
const cahier =1500;
let n_cah =4;
const stylo =500;
let n_stylo =3;
//calcul des montants
const mont_c = cahier*n_cah;
const mont_tot = mont_c+ stylo*n_stylo;
// les conditions et affichages
console.log(" ")
console.log("===== CAISSE =====");
console.log("Cahiers:",cahier*n_cah, "FCFA")
console.log("Stylos : ", stylo*n_stylo, "FCFA")
console.log("Total : ", mont_tot, "FCFA");
console.log("Budget : ", budget, "FCFA")
if (budget>=mont_tot) {
    console.log("Budget suffisant");
} else {
    console.log("Bugdet insuffisant")
}
console.log("")
//utilisation de la boucle for
let a =1;
for(let a = 1; a<=5; a++ ) {
    console.log("Achat numéro" + a)
}