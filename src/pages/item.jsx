import Item from "../components/element/container";
import NavBar from "../components/nav/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as falStar} from '@fortawesome/free-regular-svg-icons';


const star = <FontAwesomeIcon icon={faStar} />
const midStar = <FontAwesomeIcon icon={faStarHalfAlt} />
const empyStar = <FontAwesomeIcon icon={falStar} />


const ShowItem = () => {
    
    return <div className="App">
        <NavBar/>
        <Item/>
    </div>
}

export default ShowItem;