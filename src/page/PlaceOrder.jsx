import { useSelector, useDispatch } from "react-redux";
import data from "../array";
import "./listscreen.css";
import ListSof from "../components/ListSof";

import { useState } from "react";
import { addProduct,delProduct,addargaz } from "../Redux/Actions/AddProduct";
import ButonNext from "../components/ButonNext";

function ListScreen() {
  let array = data();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const worker = useSelector((state) => state.worker);

  const [categoryState, setCategoryState] = useState({});

 


  function increament(e){
   if(e.target.title){
    let json = JSON.parse(e.target.title)
    
    dispatch(addProduct(json))
   }
  }

  function decreament(e){
    if(e.target.title){
        let json = JSON.parse(e.target.title)
     dispatch(delProduct(json))
    }
   }

   function addargaaaaz(e){
    if(e.target.title){
        let json = JSON.parse(e.target.title)
     dispatch(addargaz(json))
    }
   }



  return (
    <div className="flexcol center listscreen">

      <ListSof list={worker} addargaaaaz={addargaaaaz} increament={increament} decreament={decreament} />
   <ButonNext path="/" text={`שלח אל ${worker.boss}`} />
    </div>
  );
}

export default ListScreen;
