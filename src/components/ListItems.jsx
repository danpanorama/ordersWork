import { useSelector, useDispatch } from "react-redux";
import "../App.css";

function ListItems(props) {
  const list = useSelector((state) => state.list);
  const work = useSelector((state) => state.worker);


  return (
    <div
      className={
        props.categoryState &&
        props.categoryState.isOpen &&
        props.categoryState.name == props.cat
          ? "boxcat flexcol center"
          : "disable"
      }
    >
      {list && list.item.length > 0
        ? list.item.map((e) => {
            if (e.cat == props.cat) {
              return (
                <div className="boxshadow flexrow  between" >
              
                  <div className="amount">
                    
                    <button
                    className="plusbtn"
                      title={JSON.stringify(e)}
                      onClick={props.increament}
                    >
                      +
                    </button>
                    {e.amount}
                    <button
                    className="plusbtn"
                      title={JSON.stringify(e)}
                      onClick={props.decreament}
                    >
                      -
                    </button>
                    {e.isbox == true ? 
                    <button onClick={props.addargaaaaz} title={JSON.stringify(e)} className="btnin">ארגז {e.boxes}</button>
                  :""}
                    {" "}
                  </div>
                  {work.orderItems && work.orderItems.length >0? 
                
                work.orderItems.map((ele)=>{
                 if(ele.name == e.name){
                  return(
                    <div className="">בתוך הרשימה</div>
                  )
                 }
                })
                :""}
                  <div>{e.name} </div>
                </div>
              );
            }
          })
        : "somthing wrong"}
    </div>
  );
}

export default ListItems;
