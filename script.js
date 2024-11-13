// Déclaration des variables globale 
let totalAllumette = 50
let nombreJoueurs = 0
let joueur = 1

// Fonction qui lance le jeu
function startGame() {
    const playerInput = document.getElementById("players").value
    nombreJoueurs = Number(playerInput)

    // Vérifie si le nombre de joueurs est valide (au moins 2)
    if (isNaN(nombreJoueurs) || nombreJoueurs < 2) {
        document.getElementById("errorMessage").textContent = "Veullez entrer un nombre de joueurs valide (au moins 2)."
        return
    } 

    // Cache la config du jeu et affiche l'interfce de jeu
    document.querySelector(".game-setup").style.display = "none"
    document.querySelector(".game").style.display = "block"
    document.getElementById("remainingMatches").textContent = totalAllumette
    document.getElementById("playerNumber").textContent = joueur
    document.getElementById("errorMessage").textContent = ""
}

// Fonction pour retirer les Allumettes
function removeMatches() {
    const removeAllummettes = Number(document.getElementById("removeMatches").value)

    // Vérifie que le nombre d'allumettes est valide (entre 1 et 6)
    if (isNaN(removeAllummettes) || removeAllummettes < 1 || removeAllummettes > 6) {
        document.getElementById("errorMessage").textContent = "Retirez entre 1 et 6 allumettes."
        return
    }

    // Vérifie qu'il reste assez d'allumettes pour continuer
    if (removeAllummettes > totalAllumette) {
        document.getElementById("errorMessage").textContent = "Tu ne peux pas enlever plus d'allumettes qu'il n'en reste."
        return
    }

    // MAJ du jeu
    totalAllumette -= removeAllummettes
    document.getElementById("remainingMatches").textContent = totalAllumette
    document.getElementById("errorMessage").textContent = ""

    // Vérifie si toutes les allumettes sont prises, + fin du jeu
    if (totalAllumette === 0) {
        document.getElementById("gameStatus").textContent = `Joueur ${joueur}! Tu n'as pas de chance ! C'est perdu !`
        document.getElementById("currentPlayer").style.display = "none"
        document.getElementById("removeMatches").style.display = "none"
        document.getElementById("restartButton").style.display = "inline"
        return
    }

    // Change de joueur
    joueur = (joueur % nombreJoueurs) + 1
    document.getElementById("playerNumber").textContent = joueur    
}

// Fonction qui restart le jeu
function restartGame() {
    // Réinitialise les valeurs
    totalAllumette = 50
    joueur = 1
    nombreJoueurs = 0

    // Réinitialise l'interface utilisateur
    document.querySelector(".game-setup").style.display = "block"
    document.querySelector(".game").style.display = "none"
    document.getElementById("currentPlayer").style.display = "block"
    document.getElementById("removeMatches").style.display = "inline"
    document.getElementById("restartButton").style.display = "none"
    document.getElementById("gameStatus").textContent = ""
    document.getElementById("errorMessage").textContent = ""
    document.getElementById("players").value = ""
    document.getElementById("removeMatches").value = ""
}

// Fonction pour le menu déroulant
function toggleRules() {
    const rulesDiv = document.getElementById("rules");
    const rulesButton = document.getElementById("rulesButton");
    
    if (rulesDiv.style.display === "none") {
        rulesDiv.style.display = "block";
        rulesButton.textContent = "Cacher les Règles";
    } else {
        rulesDiv.style.display = "none";
        rulesButton.textContent = "Règles du Jeu";
    }
}