import Livre from "./Livre";


export default function Bibliotheque(props) {
    return <div className="bibliotheque">
        {props.livres.map(item => <Livre key={item.id} url={item.image} titre={item.title}  prix={item.price} />)}
    </div>;
  }