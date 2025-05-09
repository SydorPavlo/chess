const state = [
  { name: 'rook', color: 'black', i: 0 },
  { name: 'knight', color: 'black', i: 1 },
  { name: 'bishop', color: 'black', i: 2 },
  { name: 'queen', color: 'black', i: 3 },
  { name: 'king', color: 'black', i: 4 },
  { name: 'bishop', color: 'black', i: 5 },
  { name: 'knight', color: 'black', i: 6 },
  { name: 'rook', color: 'black', i: 7 },
  { name: 'pawn', color: 'black', i: 8 },
  { name: 'pawn', color: 'black', i: 9 },
  { name: 'pawn', color: 'black', i: 10 },
  { name: 'pawn', color: 'black', i: 11 },
  { name: 'pawn', color: 'black', i: 12 },
  { name: 'pawn', color: 'black', i: 13 },
  { name: 'pawn', color: 'black', i: 14 },
  { name: 'pawn', color: 'black', i: 15 },
  { name: 'rook', color: 'white', i: 56 },
  { name: 'knight', color: 'white', i: 57 },
  { name: 'bishop', color: 'white', i: 58 },
  { name: 'queen', color: 'white', i: 59 },
  { name: 'king', color: 'white', i: 60 },
  { name: 'bishop', color: 'white', i: 61 },
  { name: 'knight', color: 'white', i: 62 },
  { name: 'rook', color: 'white', i: 63 },
  { name: 'pawn', color: 'white', i: 48 },
  { name: 'pawn', color: 'white', i: 49 },
  { name: 'pawn', color: 'white', i: 50 },
  { name: 'pawn', color: 'white', i: 51 },
  { name: 'pawn', color: 'white', i: 52 },
  { name: 'pawn', color: 'white', i: 53 },
  { name: 'pawn', color: 'white', i: 54 },
  { name: 'pawn', color: 'white', i: 55 },
]

const board = document.querySelector('#board')

setPieces(state)

function setPieces(state) {
  for (const piece of state) {
    board.children[piece.i].classList.add(piece.name, piece.color)
  }
}