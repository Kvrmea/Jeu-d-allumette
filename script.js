function nbrAlummette () {
    let totalAllumette = 50

   while (totalAllumette > 0) {
    // On demande à l'utilisateur combien d'allumettes il souhaite retirer
    let removeAlummettes = Number(prompt(`Combien d'allumettes veut tu retirer ? Il en reste ${totalAllumette}.`))

    // Vérifie si la saisie est validé 
    if (isNaN(removeAlummettes) || removeAlummettes <= 0) {
        console.log("Veuillez entrer un nombre valide d'allumette à retirer.")
    }

    if (removeAlummettes > totalAllumette) {
        console.log("Tu ne peux pas enlevé plus d'allumette qu'il n'en reste")
        return 0
    }

    totalAllumette -= removeAlummettes
    return totalAllumette
   }

   
}

let allumetteRestantes = nbrAlummette()
console.log("allumette restantes :", allumetteRestantes)