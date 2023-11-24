import { useCallback, useState } from "react";
import Card from "../card/Card";
import { ToastContainer, toast } from 'react-toastify';
import isWinner from "../Check/check";

import 'react-toastify/dist/ReactToastify.css';
import './Grid.css'

function Grid({ numberOfCards }){

    const [turn, setTurn] = useState(true); // false -> X, true -> 0
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); // ["","","","","","","",""]
    const [winner, setWinner] = useState(null);

    const play = useCallback(function playCallback(index){
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
            toast.success(`Congratulation !!! ${win} won the game`)
        }
        setBoard([...board]);
        setTurn(!turn);
    }, [turn])

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
            return <Card gameEnd={winner? true : false} onPlay={play} player={value} key={idx} index={idx}/>
            })}
        </div>
        </>
     
    );
 
}
export default Grid;