import { useState } from "react";
import Card from "../card/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Grid.css'

function isWinner(board, symbol){
    console.log(board, symbol);
    // row      
    if(board[0] == board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
    if(board[3] == board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
    if(board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;
    //col 
    if(board[0] == board[3] && board[3] == board[6] && board[6] == symbol) return symbol;
    if(board[1] == board[4] && board[4] == board[7] && board[7] == symbol) return symbol;
    if(board[2] == board[5] && board[5] == board[8] && board[8] == symbol) return symbol;
    //diagonal
    if(board[0] == board[4] && board[4] == board[8] && board[8] == symbol) return symbol;
    if(board[2] == board[4] && board[4] == board[6] && board[6] == symbol) return symbol;

    // if nobody is the winner return false
    return "";
}

function Grid({ numberOfCards }){

    const [turn, setTurn] = useState(true); // false -> X, true -> 0
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); // ["","","","","","","",""]
    const [winner, setWinner] = useState(null);

    function play(index){
        console.log("move played", index);
        if(turn == true){
            board[index] = "O";
        }
        else{
            board[index] = "X";
        }
        const win = isWinner(board, turn ? "O" : "X");
        console.log("Winner is: ", win);
        if(win){
            setWinner(win);
            toast(`Congratulation !!! ${win} won the game`)
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return(
        <>
        {winner && (
            <>
                <h1 className="turn-highlight">Winner is : {winner}</h1>
                <button onClick={reset}>Reset game</button>
                <ToastContainer position="top-center"/>
            </>
            )}
        <h1 className="turn-highlight">Current Turn: {(turn)? 'O' : 'X'}</h1>
        <div className="grid">
            {board.map((value, idx) => {
            return <Card onPlay={play} player={value} key={idx} index={idx}/>
            })}
        </div>
        </>
     
    );
 
}
export default Grid;