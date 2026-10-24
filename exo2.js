//Declaration des variables
const budget =20000
const cahier =1500;
const n_cah =4;
const stylo =500;
const n_stylo =3;
//calcul des montants
const mont_c = cahier*n_cah;
const mont_tot = mont_c+ stylo*n_stylo;
// les conditions et affichages
console.log("===== CAISSE =====");
console.log(" ");
console.log("Cahiers:",cahier, "FCFA")
console.log("Stylos : ", stylo*n_stylo, "FCFA")
console.log("Total : ", mont_tot, "FCFA");
console.log("Budget : ", budget, "FCFA")
if (budget>=mont_tot) {
    console.log("Budget suffisant");
} else {
    console.log("Bugdet insuffisant")
}