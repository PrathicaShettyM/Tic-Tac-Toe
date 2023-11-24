import Icon from '../Icons/Icon'
import './Card.css'
// when somebody click, we get another prop onPlay
// onclick u need to change in Card.jsx
// playMove is to find the current player, either 'X' or 'O'


function Card({ onPlay, player, index }){


    let icon = <Icon/>
    if(player == "X"){
        icon = <Icon name={"cross"} />
    } else if(player == "O"){
        icon = <Icon name={"circle"} />
    }
    
    return(
        <div className='card' onClick={()=> onPlay(index) }>
        {icon}
        </div>
    );
}

export default Card;