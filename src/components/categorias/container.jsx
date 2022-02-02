import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as falStar} from '@fortawesome/free-regular-svg-icons';


const star = <FontAwesomeIcon icon={faStar} />

const Categorias = (props) => {
    const [showCat, setCat] = useState(false),
        [showCal, setCal] = useState(false),
        categoria = props.setCategoria,
        rated = props.setRated;

    return <div className="categorias">
        <div className="opciones">
            <div className="opcionesButton" onClick={()=>{
                setCat(!showCat)
                setCal(false)
                }}>Categories {showCat?"-":"+"}</div>
            <ul className={"listaCategorias "+(showCat?"show":"hidden")}>
                <li onClick={()=>categoria('')}>All</li>
                <li onClick={()=>categoria("electronics")}>Electronics</li>
                <li onClick={()=>categoria("jewelery")}>Jewelery</li>
                <li onClick={()=>categoria("men's clothing")}>Men</li>
                <li onClick={()=>categoria("women's clothing")}>Women</li>
            </ul>
        </div>
        <div className="opciones">
            <div className="opcionesButton" onClick={()=>{
                setCal(!showCal)
                setCat(false)
                }}>Rating {showCal?"-":"+"}</div>
            <ul className={"listaCategorias star "+(showCal?"show":"hidden")}>
                <li onClick={()=>rated(1)}>{star}</li>
                <li onClick={()=>rated(2)}>{star}{star}</li>
                <li onClick={()=>rated(3)}>{star}{star}{star}</li>
                <li onClick={()=>rated(4)}>{star}{star}{star}{star}</li>
                <li onClick={()=>rated(5)}>{star}{star}{star}{star}{star}</li>
            </ul>
        </div>
    </div>
}

export default Categorias;