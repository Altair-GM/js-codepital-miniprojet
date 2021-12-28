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
    diagnostique,
    
   
   
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
    constructor(nom, cabinet, argent) {
        this.nom = nom
        this.cabinet = cabinet
        this.argent = argent
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
                    // persona.trai = 
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
           
        }
        // Payement
        this.cashConsult = () => {
            console.log('Cela fera 50 euros pour la consultation.');

            patients[0].argent -= 50;
            docteur.argent += 50;

            console.log(docteur.argent);
        }
        // Out Patient
        this.outConsult = () =>{
            console.log(traitement);
            console.log(cabinet[0].argent);
            for (const key in traitement) {
                // maladie == key maladie
                // if (cabinet[0].argent >= traitement[key]) {
                //     pharmacie.space.unshift(cabinet[0])
                //     cabinet.shift
                // }else {
                //     cimetiere.space.unshift(cabinet[0])
                //     cabinet.shift()
                // }
                console.log(key + " " + traitement[key]);
            }
            // if (cabinet[0].argent == traitement.prix) {
                
            //     pharmacie.space.unshift(cabinet[0])
            //     cabinet.shift()
            // }
            // else {
            //     cimetiere.space.unshift(cabinet[0])
            //     cabinet.shift()
            // }

        }
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