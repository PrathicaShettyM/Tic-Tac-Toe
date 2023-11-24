## Flow of the game
Parent -> Child -> Grandchild
- Grid -> Card -> Icon
- function `play` is written in Grid
- Now we pass the access of `play()` to `card` through an on play prop
- when u click on the card, u execute `onPlay` prop    => `onClick = {onPlay}` and in `onPlay we have play()`


- from grid component we are preparing a state - "board"(which is an array of length 9)
- whenever we are rendering the card, inside the card we are passing the card index also
- now we are iterating the board, whatever id the value of the board we are also passing it as a player, initailly it will be empty because no user has played it 
- when user 'X' plays it we pass 'X' and 'O' for 'O'
- inside the card we will call the onPlay() and pass the index also 
- in onPlay => play(), then change the player("X" or "O") and then set the board to new board
- in Icon also we decide which icon to display and display the required icon 