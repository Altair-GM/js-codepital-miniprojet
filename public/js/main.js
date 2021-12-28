/* --------------------------------- Import --------------------------------- */
import {
    Patient,
    Docteur,
    Chat,
    
} from "./Modules/personnages.js";
import {
    Lieu
} from "./Modules/lieux.js";

/* -------------------------------- Patients -------------------------------- */
let patient1 = new Patient("Marcus", "mal indenté", 100, [], "malade")
let patient2 = new Patient("Optimus", "unsave", 200, [], "malade")
let patient3 = new Patient("Sangoku", "404", 80, [], "malade")
let patient4 = new Patient("DarthVader", "azmatique", 110, [], "malade")
let patient5 = new Patient("Semicolon", "syntaxError", 60, [], "malade")
var patients = [patient1, patient2, patient3, patient4, patient5]

export {
    patients
}
/* --------------------------------- Docteur -------------------------------- */
var docteur = new Docteur("DR.Mahmoud", [], 0)
export {
    docteur
}
/* ---------------------------------- Chat ---------------------------------- */
let chat = new Chat("Chat:")
export {
    chat
}
/* ---------------------------------- Lieux --------------------------------- */
let street = new Lieu("Street", [])
let hopital = new Lieu("Salle d'attente", [])
let pharmacie = new Lieu("Aphoteek", [])
let cimetiere = new Lieu("CimetiéreLand", [])
/* -------------------- Simplification space personnages -------------------- */
var cabinet = docteur.cabinet
let sda = hopital.space

export {
    street,
    hopital,
    pharmacie,
    cimetiere,
    sda,
    cabinet
}

/* ------------------------------- Medicatment ------------------------------ */

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Traitement}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
let traitement = {
    "ctrl+maj+f": 60,
    "saveOnFocusChange": 100,
    "CheckLinkRelation": 35,
    "Ventoline": 40,
    "f12+doc": 20,
}
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Diagnostique}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
let diagnostique = {
    "mal indenté": "ctrl+maj+f",
    "unsave": "saveOnFocusChange",
    "404": "CheckLinkRelation",
    "azmatique": "Ventoline",
    "syntaxError": "f12+doc"
}

export {
    traitement,
    diagnostique,
    
}
/* -------------------------------- LetsPlay ------------------------------- */
console.log(diagnostique);
console.log(`L'heur des consultations a commencé les patient sont rentrer dans la salle d'attente`);

hopital.space.push(...patients)
console.log(sda);
console.log("Le premier patient rentre voir le Dr");
console.log(cabinet);
docteur.inConsult()
docteur.diagnostique(cabinet[0])
docteur.cashConsult()
docteur.outConsult()
console.log(cimetiere.space);








/* ------------------------------- Laboratory ------------------------------- */



// switch (cabinet[0].mal) {
//     case "mal indenté":
//         console.log("ctrl+maj+f");
//         break;
//     case "unsave":
//         console.log("saveOnFocusChange");
//         break;
//     default:
//         console.log('erreur');
//         break;
// }