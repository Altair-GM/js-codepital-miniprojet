/* --------------------------------- Import --------------------------------- */
import {
    Patient,
    Docteur,
    Chat,
    Traitement

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
/* ---------------------------------- Chat ---------------------------------- */
let chat = new Chat("Chat:")

/* --------------------------------- Docteur -------------------------------- */
var docteur = new Docteur("DR.Mahmoud", [], 0)
export {
    docteur
}
/* ---------------------------------- Lieux --------------------------------- */
let street = new Lieu("Street", [])
let hopital = new Lieu("Salle d'attente", [])
let pharmacie = new Lieu("Aphoteek", [], 0)
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
let malID = new Traitement(`ctrl+maj+f`, 60);
let unSave = new Traitement(`saveOnFocusChange`, 100);
let e404 = new Traitement(`CheckLinkRelation`, 35);
let azme = new Traitement(`Ventoline`, 40);
let synErr = new Traitement(`f12+doc`, 20);
let traitement = [malID,unSave,e404,azme,synErr]

export{
    
    traitement
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

    diagnostique,

}
/* -------------------------------- LetsPlay ------------------------------- */

console.log(`L'heur des consultations a commencé les patient sont rentrer dans la salle d'attente`);

hopital.space.push(...patients)
console.log(`Salle d'attente --->${sda}`);
console.log("Le premier patient rentre voir le Dr " + docteur.nom);
console.log(cabinet);
chat.miau();
patients.forEach(el => {
    
    docteur.inConsult(el)
    docteur.diagnostique(cabinet[0])
    docteur.cashConsult()
    console.log(pharmacie.space);
    docteur.outConsult()
    pharmacie.pharmaPay()
});









/* ------------------------------- Laboratory ------------------------------- */


            // for (const key in traitement) {
                // maladie == key maladie
                // if (cabinet[0].argent >= traitement[key]) {
                //     pharmacie.space.unshift(cabinet[0])
                //     cabinet.shift
                // }else {
                //     cimetiere.space.unshift(cabinet[0])
                //     cabinet.shift()
                // }
                // console.log(key + " " + traitement[key]);
            // }





            // if (cabinet[0].argent == traitement.prix) {
                
            //     pharmacie.space.unshift(cabinet[0])
            //     cabinet.shift()
            // }
            // else {
            //     cimetiere.space.unshift(cabinet[0])
            //     cabinet.shift()
            // }