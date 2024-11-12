// étape 1 et 2
// Fonction qui permet de voir le nombre d'allumette
function jeuAllumettes () {
    let totalAllumette = 50
    let nombreJoueurs = Number(prompt("Combien de joueurs vont participer ?"))

    // Vérifie l'entrée pour le nombre de joueurs
    while (isNaN(nombreJoueurs) || nombreJoueurs < 2) {
        nombreJoueurs = Number(prompt("Veuillez entrer un nombre de joueurs valide (au moins 2)."))
    }

    let joueur = 1

   while (totalAllumette > 0) {
    // On demande à l'utilisateur combien d'allumettes il souhaite retirer
    let removeAllummettes = Number(prompt(`Joueur ${joueur}, Combien d'allumettes veut tu retirer ? Il en reste ${totalAllumette}. (Tu peux retirer entre 1 et 6 allumettes)`))

    // Vérifie si la saisie est validé 
    if (isNaN(removeAllummettes) || removeAllummettes <= 0 || removeAllummettes > 6) {
        console.log("Retire entre 1 et 6 allumettes.")
        continue
    }

    // Vérifie si l'utilisateur essaie de retirer + d'allumette qu'il en reste
    if (removeAllummettes > totalAllumette) {
        console.log("Tu ne peux pas enlevé plus d'allumette qu'il n'en reste")
        continue
    }

    // Soustrait le nombre d'allumette demandé 
    totalAllumette -= removeAllummettes

    // Affiche le nombre d'allumette restantes
    console.log(`Il reste ${totalAllumette} allumettes.`)

    // Vérifie si le joueur a gagné
    if (totalAllumette === 0) {
        console.log(`Félicitations Joueur ${joueur}! T'es le meilleur. Tu as gagné !`)
        break
    }

    // Change de joueur pour le tour suivant
    joueur = (joueur % nombreJoueurs) + 1
    
   }
}

jeuAllumettes()