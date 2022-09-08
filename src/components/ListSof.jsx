import { useSelector, useDispatch } from "react-redux";
import "../App.css";

function ListSof(props) {

  return (
    <div
      className="boxcat flexcol center"
    >
      {props.list.orderItems && props.list.orderItems.length > 0
        ? props.list.orderItems.map((e) => {
           
              return (
                <div className="boxshadow flexrow  between">
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
                    {/* {e.isbox == true ? 
                    <button onClick={props.addargaaaaz} title={JSON.stringify(e)} className="btnin">ארגז</button>
                  :""} */}
                    {" "}
                  </div>
                  <div>{e.name} </div>
                </div>
              );
            
          })
        : "somthing wrong"}
    </div>
  );
}

export default ListSof;
