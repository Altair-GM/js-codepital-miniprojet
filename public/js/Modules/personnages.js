import {
    pharmacie,
    docteur,
    patients,
    sda,
} from "../main.js"

export class Traitement {
    constructor(nom, prix) {
        this.nom = nom
        this.prix = prix

    }
}

export class Patient {
    constructor(nom, mal, argent, poche, stat) {
        this.nom = nom
        this.mal = mal
        this.argent = argent
        this.poche = poche
        this.stat = stat

    }
}

export class Docteur {
    constructor(nom, cabinet, argent) {
        this.nom = nom
        this.cabinet = cabinet
        this.argent = argent
        this.inConsult = (el) => {
            cabinet.unshift(el)
            sda.shift()
            console.log(el);
            console.log(`${docteur.nom} - Bonjour Mr ${el.nom}`);;
        }
        // Diagnostique
        this.diagnostique = (patient) => {

            console.log(`Bonjour ${patient.nom} vous soufrez de ${patient.mal}`);
            switch (cabinet[0].mal) {
                case "mal indenté":
                    console.log('Je vou prescrit -> ctrl+maj+f');
                    cabinet[0].poche.push("ctrl+maj+f")

                    break;
                case "unsave":
                    console.log('Je vou prescrit -> saveOnFocusChange');
                    cabinet[0].poche.push("saveOnFocusChange")
                    break;
                case "404":
                    console.log("Je vou prescrit -> CheckLinkRelation");
                    cabinet[0].poche.push("CheckLinkRelation")
                    break;
                case "azmatique":
                    console.log("Je vou prescrit -> Ventoline");
                    cabinet[0].poche.push("Ventoline")
                    break;
                case "syntaxError":
                    console.log("Je vou prescrit -> f12+doc");
                    cabinet[0].poche.push("f12+doc")
                    break;
                default:
                    console.log('break Appelle Ahyan !!! tu vas etre dans la merde putin !!');
                    break;
            }

        }
        // Payement
        this.cashConsult = () => {
            console.log(`Cela fera 50 euros pour la consultation Mr ${cabinet[0].nom}`);

            patients[0].argent -= 50;
            docteur.argent += 50;

            console.log(`Dr. ${docteur.nom} as maintenant ${docteur.argent}€ au total`);
        }
        // Out Patient
        this.outConsult = () => {

            console.log(`${cabinet[0].nom} se dirige vers la pharmacie pour se soigné`);
            pharmacie.space.unshift(cabinet[0])
            cabinet.shift()

        }

    }
}

export class Chat {
    constructor(nom, ) {
        this.nom = nom
        this.miau = () => {
            setInterval(() => {
                console.log(this.nom, "-Miaaaaoooouuuuu !!");

            }, 5000);

        }

    }
}