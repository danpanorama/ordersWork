import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import data from "../array";
import "./listscreen.css";

import ListItems from "../components/ListItems";
import ButonNext from "../components/ButonNext";
import { useState } from "react";
import { addProduct,delProduct,addargaz } from "../Redux/Actions/AddProduct";
import { amountset,amountdown } from "../Redux/Actions/ProductActions";


function ListScreen() {
  let array = data();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const worker = useSelector((state) => state.worker);

  const [categoryState, setCategoryState] = useState({});

  useEffect(() => {
    dispatch(listProduct(array));
  }, []);




  function increament(e){
   if(e.target.title){
    let json = JSON.parse(e.target.title)
     dispatch(amountset(json))
    dispatch(addProduct(json))
   

   }
  }

  function decreament(e){
    if(e.target.title){
        let json = JSON.parse(e.target.title)
      dispatch(amountdown(json))
        dispatch(delProduct(json))
    

    }
   }

   function addargaaaaz(e){
    if(e.target.title){
        let json = JSON.parse(e.target.title)
        json.boxes = json.boxes+1
     dispatch(addargaz(json))



    }
   }

  function OpenCategory(e) {
    if (e.target.id == categoryState.name) {
      let obj = {
        name: "",
        isOpen: false,
      };

      setCategoryState(obj);
      return;
    }else{
        let obj = {
            name: e.target.id,
            isOpen: true,
          };
      
          setCategoryState(obj);
    }

 
  }

  return (
    <div className="flexcol center listscreen">
      {list.loading ? (
        <div className="div">loading</div>
      ) : (
        <div className="box  flexcol center">
          <div  className="list_cat_box">
            <div onClick={OpenCategory} id="drinks" className="heade">משקאות קלים +</div>

            <ListItems addargaaaaz={addargaaaaz} increament={increament} decreament={decreament} categoryState={categoryState} cat="drinks" />
          </div>
          <div  className="list_cat_box">
            <div onClick={OpenCategory} id="coffee"  className="heade">קפה + </div>
            <ListItems addargaaaaz={addargaaaaz} increament={increament} decreament={decreament} categoryState={categoryState} cat="coffee" />
          </div>
          <div  className="list_cat_box ">
            <div onClick={OpenCategory} id="alcohol"className="heade">אלכוהול +</div>
            <ListItems addargaaaaz={addargaaaaz} increament={increament} decreament={decreament} categoryState={categoryState} cat="alcohol" />
          </div>
        </div>
      )}
      {worker && worker.orderItems.length > 0?
            <ButonNext path="/message" text={"המשך"} />

      :""}
    </div>
  );
}

export default ListScreen;
