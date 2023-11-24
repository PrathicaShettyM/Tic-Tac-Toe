import Icon from '../Icons/Icon'
import './Card.css'

import { memo } from 'react'
// when somebody click, we get another prop onPlay
// onclick u need to change in Card.jsx
// playMove is to find the current player, either 'X' or 'O'


function Card({ onPlay, player, index, gameEnd }){

    let icon = <Icon/>
    if(player == "X"){
        icon = <Icon name={"cross"} />
    } else if(player == "O"){
        icon = <Icon name={"circle"} />
    }
    
    return(
        <div className='card' onClick={()=> !gameEnd && player == "" && onPlay(index) }>
        {icon}
        </div>
    );
}

export default memo(Card);