

const changeTitle = () => {
  const title = document.getElementsByTagName("h1")[0]
  title.innerHTML = "Ce que j'ai appris à THP"
  title.nextElementSibling.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
const changeCallToActions = () => {
  const buttons = document.querySelectorAll("main section div p a")
  buttons[0].innerHTML = "OK je veux tester !"
  buttons[0].href = "http://www.thehackingproject.org"
  buttons[1].innerHTML = "Non merci"
  buttons[1].href = "https://www.pole-emploi.fr/accueil/"
}

const changeLogoName = () => {
  const album = document.querySelector("header div a strong")
  album.innerHTML = "The THP Experience"
  album.style.fontSize = "2em"
}

const populateImages = () => {
  const imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"]
  const cardImages = document.querySelectorAll(".card img")
  cardImages.forEach( (image, index) => image.src = imagesArray[index])
}

const deleteLastCards = () => {
  const cards = document.querySelectorAll(".card")
  cards.forEach( (card, index, arr) => index + 1 < arr.length - 2 ? 1 : card.remove()) 
}

const changeCardsText = () => {
  const cardsTexts = document.querySelectorAll(".card-text")
  cardsTexts.forEach( (cardText, index, arr) => {
    switch (index) {
      case 0:
        cardText.innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
        break;
      case 1:
        cardText.innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
        break;
      case 2:
        cardText.innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
        break;
      
      default:
        break;
    }
  })
}

const changeViewButtons = () => {
  const buttonGroups = document.querySelectorAll(".btn-group")
  buttonGroups.forEach( group => group.firstElementChild.classList.replace("btn-outline-secondary", "btn-success"))
}

const pyramid = () => {
  const rowDiv = document.getElementsByClassName("row")[1]
  const newRowDiv = document.createElement("div")
  newRowDiv.className = "row"
  rowDiv.parentElement.appendChild(newRowDiv)
  console.log(rowDiv.parentElement)
  const jsCard = document.querySelectorAll('.col-md-4')[2]
  newRowDiv.appendChild(jsCard)
  console.log(jsCard)
}

changeTitle()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
pyramid()