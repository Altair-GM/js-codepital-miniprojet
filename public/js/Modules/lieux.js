import {
    cimetiere,
    pharmacie,
    traitement
} from "../main.js";

export class Lieu {
    constructor(nom, space, caisse) {
        this.nom = nom
        this.space = space
        this.caisse = caisse

        this.pharmaPay = () => {
            console.log(`Bienvenue dans la pharmacie ${pharmacie.nom}   Mr ${pharmacie.space[0].nom}, Avez vous une ordonance ?`);
            // console.log(`Cela fera 50 euros pour la consultation Mr ${cabinet[0].nom}` );

            // pharmacie.space[0].argent -= traitement
            // docteur.argent += 50;

            // console.log(`Dr. ${docteur.nom} as maintenant ${docteur.argent}€ au total`);

            traitement.forEach(el => {

                if (el.nom == pharmacie.space[0].poche) {

                    console.log(`Merci , Je vois que l'on vous a prescrit ${el.nom}, cela vous couteras ${el.prix} €`);

                    
                    
                    
                    if (pharmacie.space[0].argent >= el.prix ) {
                        
                        pharmacie.space[0].argent -= el.prix
                        pharmacie.caisse += el.prix;
                        console.log("Parfait voila votre remede, a Bientot");
                        pharmacie.space[0].stat = "gueri"
                        console.log(pharmacie.space[0].nom+" est gueri !!!");
        
                    }if (pharmacie.space[0].argent < el.prix) {
                        console.log(`Je suis désole vous n'avez pas assez pour payé Mr ${pharmacie.space[0].nom} il ne vous reste pas beacoup a vivre`);
                        pharmacie.space[0].stat = "mort"
                        cimetiere.space.push(pharmacie.space[0])
                        console.log(`Mr ${pharmacie.space[0].nom} est malheuresuement décédér il est au cimetiére d'Ixelles`);  
                    }
                }
                
            });

            


        }
    }
}