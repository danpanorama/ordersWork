import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import { Link} from "react-router-dom";

function ButonNext(props){

    return(
        <div className="butundiv">
            <Link to={{pathname:props.path} }>
            <p className="butun">{props.text}</p>
            </Link>
        </div>
    )

}
export default ButonNext