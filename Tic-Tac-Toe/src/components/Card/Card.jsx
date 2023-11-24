import Icon from '../Icons/Icon'
import './Card.css'

function Card({ iconName }){
    return(
        <div className='card'>
            <Icon name={iconName} />
        </div>
    );
}

export default Card;