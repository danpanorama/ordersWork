import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListSof from "../components/ListSof";
import './css.css'

function Navbar(props) {
  const [popup,setpopup] = useState(false)
 
  const workerlist = useSelector((state) => state.worker);

  function activate(){
    setpopup(!popup)
  }

  return (
    <div className="navAllBar">
   <div className="hazmana flexcol center" onClick={activate}>{popup?"X":"הזמנה"}</div>
    <div className={popup?"backround ":"disable2"}>

    <div className="gagaga">
      
 <div className="margintop">
     
          <div className="ma">
            <ListSof list={workerlist}/>
          </div>
   
 </div>
    </div>
    </div>
   
     
    </div>
  );
}

export default Navbar;
