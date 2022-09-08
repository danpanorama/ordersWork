
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate} from "react-router-dom";
import { addboss } from "../Redux/Actions/AddProduct";



function MessageScreen (props){
    const worker = useSelector((state) => state.worker);
    const dispatch = useDispatch();
    const [navi,setnavi] = useState(false);


    function chooseBoss(e){
        dispatch(addboss(e.target.id))
        setnavi(true)


    }
    if(navi){
        return <Navigate to='/placeorder' />
    }

    return(
        <div className="flexcol center listscreen">
             <div className="box  flexcol center">
          <div  className="w100">
           <div className="names" id='ofek' onClick={chooseBoss} >אופק</div>
          <div className="names" id="niv" onClick={chooseBoss} >ניב</div>
            <div className="names" id="amir" onClick={chooseBoss} >אמיר</div>

           <div className="namesnobtn">בחר למי לשלוח</div>
          </div> </div>
</div>
    )

}
 
export default MessageScreen