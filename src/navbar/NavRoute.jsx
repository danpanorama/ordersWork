import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar"
import ListScreen from "../page/ListScreen";
import MessageScreen from '../page/MessageScreen';
import PlaceOrder from '../page/PlaceOrder'

// commit
function NavRoute() {
  return (
    <div className="nav">
<Navbar/>

<Routes>


{/* <Route path="/storeprofile" element={ <StorePrivateRouter />} exact> 
<Route path="/storeprofile" element={<StoreProfile/>} exact/>


</Route> */}



<Route path="/" element={<ListScreen/>} exact/>
<Route path="/message" element={<MessageScreen/>} exact/>
<Route path="/placeorder" element={<PlaceOrder/>} exact/>





{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
   
    </div>
  
  );
}

export default NavRoute;
