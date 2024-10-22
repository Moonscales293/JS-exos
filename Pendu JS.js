const words = ["Chameau", "Bateau", "Maison", "Ordinateur", "Éléphant", "Montagne", "Avion", "Pomme", "Soleil", "Lune", "Poisson", "Arbre", "Chocolat", "Voiture", "Guitare", "Plage", "Boulanger", "Caméra", "Pirate", "Riviere"];
//* Tableau avec les mots à deviner *//
let valeurWords = words[random(0, words.length - 1)].toLowerCase(); // Convertir en minuscule pour comparer facilement
let guessedWord = "_".repeat(valeurWords.length);
let essais = 6;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //* fonction de génération d'une valeur au hasard dans le tableau *//

function updateWord(secretWord, inputLetter, displayWord) {
    let newDisplayWord = "";
    let letterFound = false;

    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === inputLetter) {
            newDisplayWord += inputLetter;
            letterFound = true;
        } else {
            newDisplayWord += displayWord[i] || "_";
        }
    }
    return {newWord: newDisplayWord, letterFound: letterFound};
} //* fonction pour mettre à jour le mot deviné et les conditions de réussite *//

//* Mise en place d'une boucle pour demander des lettres tant qu'il y a des essais *//
while (essais > 0) {
    let input = prompt("Entrez une lettre");

    let result = updateWord(valeurWords, input, guessedWord);

    guessedWord = result.newWord; //* Mettre à jour le mot deviné *//

    if (!result.letterFound) {
        essais--;  //* Réduire les essais seulement si la lettre n'a pas été trouvée *//
    }

    console.log(guessedWord, "Il vous reste", essais, "essais");

    if (guessedWord === valeurWords) {
        console.log("Bravo, vous avez gagné !");
        break;
    }
} //* Message de victoire *//

if (essais === 0) {
    console.log("Vous avez perdu ! Le mot était " + valeurWords);
}
//* Message en cas d'essais épuisés *//

