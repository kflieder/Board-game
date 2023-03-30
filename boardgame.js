
// Add event listeners to each tile to detect when the player clicks on it.
// Add event listeners to each square to detect when the player clicks on it.
// Inside the event listener for the tile, store a reference to the selected tile.
// Inside the event listener for the square, check if a tile has been selected and then place the selected tile on the square.




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
  }
}


const playerChar1 = document.createElement('div')
playerChar1.textContent = "CHARACTER"
document.getElementById('space1').appendChild(playerChar1)




