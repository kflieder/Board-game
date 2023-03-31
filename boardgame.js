let board = document.getElementById('.board-el')

const spaces = document.querySelectorAll('.space')
const tileWithPic = document.getElementById('with-pic')
const tileWithPath = document.querySelectorAll('.tile') 
let gameStarted = false

const allPathTiles = ['straight', 'four-way path', 'turn left']
const allPicTiles = []

tileWithPath.forEach((currentTile) => {
  currentTile.addEventListener('click', () => {
    addTileToBoard(currentTile, drawnTile);
  })
})


const drawTileBtn = document.getElementById('draw-tile-btn')
let drawnTile = document.getElementById('drawn-tile')

drawTileBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * allPathTiles.length);
  drawnTile.innerText = allPathTiles[randomIndex]
})

function addTileToBoard(currentTile, drawnTile) {
  if (currentTile.innerText === '') {
    currentTile.innerText = drawnTile.innerText;
    drawnTile.textContent = '';
    isCharacterMove = true
  }
}

const playerChar1 = document.createElement('div')
playerChar1.textContent = "CHARACTER"
document.getElementById('space2').appendChild(playerChar1)

let isPlayerTurn = false
let isCharacterMove = false
let isCharacterSelected = false

playerChar1.addEventListener('click', () => {
  if (isCharacterMove) {
    isCharacterSelected = true
  }
})

spaces.forEach((space) => {
  space.addEventListener('click', () => {
    if (isCharacterSelected) {
      space.appendChild(playerChar1)
    }
  })
})




