import { Download } from 'lucide-react';
function Card(props){
    return(
        <div className="card">
            <div className="top">
                <img src={props.image}></img>
            </div>
            <div className="center">
                <div><h3><b><u>Name</u>:</b> {props.name}</h3></div>
                <div><h3><b><u>Age</u>:</b> {props.age}</h3></div>
                <div><h3><b><u>Breathing Style</u>:</b> {props.breathingStyle}</h3></div>
                <div><h3><b><u>Rank</u>:</b> {props.rank}</h3></div>
            </div>
            <div className="bottom">
                <div><button>Download <Download /></button></div>
            </div>
        </div>
    )
}
export default Card;