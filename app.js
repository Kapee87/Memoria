const cardArray = [
    {
        name:'fries',
        img:'./images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'./images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'./images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'./images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'./images/milkshake.png',
    },
    {
        name:'pizza',
        img:'./images/pizza.png',
    },
    {
        name:'fries',
        img:'./images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'./images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'./images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'./images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'./images/milkshake.png',
    },
    {
        name:'pizza',
        img:'./images/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const failed = document.querySelector('#failed')
const mensaje = document.querySelector('#mensaje')
const fondo = document.querySelector('#fondo')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon= []
let failedTimes = 0


function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
    }
}
createBoard()




function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
      setTimeout(mismaCarta, 300)
    }
    else if (cardsChosen[0] == cardsChosen[1]){
        setTimeout(acertaste, 300)
        cards[optionOneId].setAttribute('src', './images/white.png')
        cards[optionTwoId].setAttribute('src', './images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionTwoId].setAttribute('src', './images/blank.png')
        cards[optionOneId].setAttribute('src', './images/blank.png')
        setTimeout(erraste, 300)
        failedTimes++
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    failed.textContent= failedTimes

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Felicidades, los descubriste todos!'
        setInterval(acertaste, 500)
        setInterval(fondiu, 2000)
    }

}

function flipCard(){
    const cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
function acertaste(){
mensaje.innerHTML = 'ACERTASTE!'
setTimeout(vaciar, 900)
}

function erraste(){
    mensaje.innerHTML = "TE EQUIVOCASTE! PROBÁ OTRA VEZ"
    setTimeout(vaciar, 900)
}
function mismaCarta(){
    mensaje.innerHTML = "Elegiste la misma carta, elegí de nuevo"
    setTimeout(vaciar, 900)
}
function vaciar(){
    mensaje.innerHTML = ''
}
function fondiu(){
    fondo.className= 'fondo'
    setTimeout(vaciarFondo,5000)
}
function vaciarFondo(){
    fondo.className =''
}
