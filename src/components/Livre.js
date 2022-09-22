import Image from "./Image";
import Prix from "./Prix";
import Titre from "./Titre";


export default function Livre(props) {
    return <div className="livre">
        <Image url={props.url} titre={props.titre}/>
        <Titre titre={props.titre} />
        <Prix prix={props.prix} />
    </div>;
}