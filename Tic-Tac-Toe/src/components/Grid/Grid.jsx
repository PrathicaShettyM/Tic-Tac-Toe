import Card from "../card/Card";
import './Grid.css'

function Grid({ numberOfCards }){
    return(
        <div className="grid">
     {Array(numberOfCards).fill(<Card/>).map((el, idx) => {
        return <Card key={idx}/>
     })}
        </div>
     
    );
 
}
export default Grid;