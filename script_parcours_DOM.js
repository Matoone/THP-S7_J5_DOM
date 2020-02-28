console.log('Combien y a-t-il d\'éléments <p> présents dans la page HTML ?')
const nbrOfP = document.getElementsByTagName('p').length
console.log(`----> Il t a ${nbrOfP} paragraphes dans cette page.`)

console.log("Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.")
const content = document.getElementById('coucou').textContent
console.log(`----> Le contenu est : \n ${content}`)

console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.")
const urlThirdA = document.getElementsByTagName('a')[2].href
console.log(`----> L'url est : ${urlThirdA}`)

console.log("Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.")
const nbrOfCompteMoiElements = document.getElementsByClassName("compte-moi").length
console.log(`----> Il y a ${nbrOfCompteMoiElements} éléments remplissant cette condition.`)

console.log("Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.")
const nbrOfLiOfCompteMoiClass = document.querySelectorAll("li.compte-moi").length
console.log(`----> Il y a ${nbrOfLiOfCompteMoiClass} éléments <li> portant cette classe.`)

console.log("Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.")
const nbrOfLiInOlCompteMoiClass = document.querySelectorAll("ol li.compte-moi").length
console.log(`----> Il y a ${nbrOfLiInOlCompteMoiClass} éléments remplissant cette condition`)

console.log("Petit jeu de piste à résoudre si possible sans regarder le fichier HTML… La page contient un seul élément <div>. Celui-ci contient 2 éléments \"unordered list\" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.")
const hiddenContent = document.querySelectorAll("div ul")[1].childNodes[1].textContent
console.log(`----> Le contenu caché est: \n ${hiddenContent}`)