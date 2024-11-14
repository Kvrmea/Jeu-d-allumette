// Déclaration des variables globale 
let totalAllumette = 50
let nombreJoueurs = 0
let joueur = 1
let playerNames = []

// Sélection des éléments HTML pour le message en direct
const textInLive = document.getElementById("texteEnDirect")
const zoneMessage = document.getElementById("messageUser")

// Fonction qui lance le jeu
function startGame() {
    const playerInput = document.getElementById("players").value
    const namesInput = document.getElementById("playerNames").value
    nombreJoueurs = Number(playerInput)

    // Vérifie si le nombre de joueurs est valide (au moins 2)
    if (isNaN(nombreJoueurs) || nombreJoueurs < 2) {
        document.getElementById("errorMessage").textContent = "Veullez entrer un nombre de joueurs valide (au moins 2)."
        return
    }
    
    // Sépare les prénoms et les stocke dans le tableau playerNames
    playerNames = namesInput.split(",").map(name => name.trim())

    // Vérifie si le nombre de joueurs est valide au nombre de prénom
    if (playerNames.length !== nombreJoueurs) {
        document.getElementById("errorMessage").textContent = `Veuillez entrer exactement ${nombreJoueurs} prénoms, séparés par des virgules.`
        return
    }

    // Cache la config du jeu et affiche l'interfce de jeu
    document.querySelector(".game-setup").style.display = "none"
    document.querySelector(".game").style.display = "block"
    document.getElementById("remainingMatches").textContent = totalAllumette
    document.getElementById("playerNumber").textContent = playerNames[joueur - 1]
    document.getElementById("errorMessage").textContent = ""
}

// écouteur d'événement pour cliqué sur "Commencer le jeu"
document.getElementById("startBtn").addEventListener("click", startGame)

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
    document.getElementById("removeMatches").value = ""
    document.getElementById("errorMessage").textContent = ""
    
    // Vérifie si toutes les allumettes sont prises, + fin du jeu
    if (totalAllumette === 0) {
        document.getElementById("gameStatus").textContent = `${playerNames[joueur - 1]} ! Tu n'as pas de chance ! C'est perdu !`
        document.getElementById("currentPlayer").style.display = "none"
        document.getElementById("removeMatches").style.display = "none"
        document.getElementById("restartButton").style.display = "inline"
        return
    }
    
    // Change de joueur
    joueur = (joueur % nombreJoueurs) + 1
    document.getElementById("playerNumber").textContent = playerNames[joueur - 1]    
}

// Ajout d'un écouteur d'évenement pour cliquer sur "Entrée" pour la button Retirer
document.getElementById("removeMatches").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        removeMatches()
    }
})

// Fonction pour afficher le message en direct 
function showMessage (message) {
    zoneMessage.textContent = message
}

// MAJ en direct pendant la saisie
document.getElementById("removeMatches").addEventListener("input", function(event) {
    const texteSaisi = event.target.value
    textInLive.textContent = `Ton choix est de ${texteSaisi} allumettes` || "Votre choix apparaîtra ici"
})

// Fonction qui restart le jeu
function restartGame() {
    // Réinitialise les valeurs
    totalAllumette = 50
    joueur = 1
    nombreJoueurs = 0
    playerNames = []

    // Réinitialise l'interface utilisateur
    document.querySelector(".game-setup").style.display = "block"
    document.querySelector(".game").style.display = "none"
    document.getElementById("currentPlayer").style.display = "block"
    document.getElementById("removeMatches").style.display = "inline"
    document.getElementById("restartButton").style.display = "none"
    document.getElementById("gameStatus").textContent = ""
    document.getElementById("errorMessage").textContent = ""
    document.getElementById("players").value = ""
    document.getElementById("playerName").value = ""
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

document.getElementById("rulesButton").addEventListener("click", toggleRules)