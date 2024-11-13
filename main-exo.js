// Variables globales
let totalAllumettes = 50
let nombreJoueurs
let joueur = 1
let allumettesRestantes

// Fonction qui permet de voir le nombre d'allumettes
function jeuAllumettes() {
    // Initialisation du nombre de joueurs et des allumettes restantes
    nombreJoueurs = askNumberJoueurs()
    allumettesRestantes = totalAllumettes

    // Boucle principale du jeu
    while (allumettesRestantes > 0) {
        let removeAllumettes = askNumberAllumettes()

        // MAJ nombre d'allumettes restantes
        allumettesRestantes -= removeAllumettes

        showAllumettesRestantes()

        // Vérifie si le joueur a gagné
        if (allumettesRestantes === 0) {
            showWinner()
            break
        }

        // Change de joueur pour le prochain tour
        changePlayer()
    }
}

// Fonction pour demander le nombre de joueurs
function askNumberJoueurs() {
    let nombreJoueurs = Number(prompt("Combien de joueurs vont participer ?"))
    // Vérifie l'entrée pour le nombre de joueurs
    while (isNaN(nombreJoueurs) || nombreJoueurs < 2) {
        nombreJoueurs = Number(prompt("Veuillez entrer un nombre de joueurs valide (au moins 2)."))
    }
    return nombreJoueurs
}

// Fonction pour demander combien d'allumettes le joueur souhaite retirer
function askNumberAllumettes() {
    let allumettes
    while (true) {
        allumettes = Number(prompt(`Joueur ${joueur}, combien d'allumettes veux-tu retirer ? Il en reste ${allumettesRestantes}. (Tu peux retirer entre 1 et 6 allumettes)`))

        // Vérifie si la saisie est valide
        if (!isNaN(allumettes) && allumettes > 0 && allumettes <= 6 && allumettes <= allumettesRestantes) {
            break
        }
        console.log("Saisie invalide. Veuillez retirer entre 1 et 6 allumettes, sans dépasser le nombre restant.")
    }
    return allumettes
}

// Fonction pour afficher le nombre d'allumettes restantes
function showAllumettesRestantes() {
    // Affiche le nombre d'allumettes restantes
    console.log(`Il reste ${allumettesRestantes} allumettes.`)
}

// Fonction pour annoncer le vainqueur
function showWinner() {
    console.log(`Félicitations Joueur ${joueur}! T'es le meilleur. Tu as gagné !`)
}

// Fonction pour changer de joueur
function changePlayer() {
    // Change de joueur pour le tour suivant
    joueur = (joueur % nombreJoueurs) + 1
}

// Démarrer le jeu
jeuAllumettes()
