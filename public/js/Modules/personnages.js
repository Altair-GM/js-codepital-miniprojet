import {
    street,
    hopital,
    pharmacie,
    cimetiere,
    docteur,
    patients,
    sda,
    cabinet,
    traitement,
    diagnostique
} from "../main.js"
export class Patient {
    constructor(nom, mal, argent, poche, stat) {
        this.nom = nom
        this.mal = mal
        this.argent = argent
        this.poche = poche
        this.stat = stat
        // **Methodes**
        // deplacement
        // this.deplace = (dep,arr) =>{
        //     dep.splice(arr.indexOf(this),1)
        //     console.log(this.nom,`se deplace vers `, arr.nom);
        // }

        // soigner
        // payer
    }
}

export class Docteur {
    constructor(nom, cabinet, caisse) {
        this.nom = nom
        this.cabinet = cabinet
        this.caisse = caisse
        // **Methodes**
        // In/ Patients
        this.inConsult = () => {
            cabinet.unshift(sda[0])
            sda.shift()
            console.log(cabinet[0]);
            console.log(`${docteur.nom} - Bonjour Mr ${cabinet[0].nom}`);
        }
        // Diagnostique
        this.diagnostique = (patient) => {
            
            console.log(`Bonjour ${patient.nom} vous soufrez de ${patient.mal}`);
            switch (cabinet[0].mal) {
                case "mal indenté":
                    console.log('Je vou prescrit -> ctrl+maj+f');
                    break;
                case "unsave":
                    console.log('Je vou prescrit -> saveOnFocusChange');
                    break;
                case "404":
                    console.log("Je vou prescrit -> CheckLinkRelation");
                    break;
                case "azmatique":
                    console.log("Je vou prescrit -> Ventoline");
                    break;
                case "syntaxError":
                    console.log("Je vou prescrit -> f12+doc");
                    break;
                default:
                    console.log('Je vou prescrit -> break');
                    break;
            }
           
            console.log('Cela fera 50 euros pour la consultation.');

            patient.argent -= 50;
            this.argent += 50;
        }

        // Payement
    }
}

export class Chat {
    constructor(nom, ) {
        this.nom = nom
        this.miau = () => {
            setInterval(() => {
                Chat = console.log(this.nom, "-Miaaaaoooouuuuu !!");

            }, 10000);



        }


    }
}