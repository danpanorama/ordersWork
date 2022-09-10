import * as actionTypes from "../constants/WorkerConstant";

const initialState = {
  orderItems: [],
  loading: false,
  boss: "",

};

const worders = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.ADD_ORDER:
      const add = {
        ...state,
      };
      let flag = false;
      if (action.data) {
        for (let i = 0; i < add.orderItems.length; i++) {
          if (add.orderItems[i].name == action.data.name) {
            
            add.orderItems[i].amount =
              add.orderItems[i].amount + 1;
            flag = true;
          }
        }
        if (!flag) {

action.data.amount = action.data.amount+1
          add.orderItems = [...add.orderItems, action.data];

        }
      }
      let safeReload = JSON.stringify(add.orderItems);
      localStorage.setItem("order1", safeReload);
      console.log(add)


      return add;

    case actionTypes.DEL_ORDER:
      const del = {
        ...state,
      };


      if (action.data) {
        let flag = false;

        for (let i = 0; i < del.orderItems.length; i++) {
          if (del.orderItems[i].id == action.data.id) {
            if (del.orderItems[i].amount > 1) {
              del.orderItems[i].amount =
                del.orderItems[i].amount - 1;
            } else {

              flag = true;
            }
          }
        }

        if (flag) {
          let arr = del.orderItems.filter((ele) => {
            return ele.name != action.data.name;
          });
          del.orderItems = arr;
        }

        let safeDeploy = JSON.stringify(del.orderItems);
        localStorage.setItem("order1", safeDeploy);
      }



      return del;




    case actionTypes.ADD_ARGAZ:
      const argax = {
        ...state,
      };

      for (let i = 0; i < argax.orderItems.length; i++) {
        if (argax.orderItems[i].name == action.data.name) {
          argax.orderItems[i].boxes = argax.orderItems[i].boxes + 1

        }
      }

      console.log(argax)
      return argax;

    case actionTypes.DEL_ARGAZ:
      const delargax = {
        ...state,
      };
      for (let i = 0; i < delargax.orderItems.length; i++) {
        if (delargax.orderItems[i].name == action.data.name) {
          delargax.orderItems[i].boxes = delargax.orderItems[i].boxes - 1

        }
      }


      return delargax;


    case actionTypes.BOSS:
      const boss = {
        ...state,
      };

      boss.boss = action.data

      return boss;


    case actionTypes.SETEFFECT:
      const set = {
        ...state,
      };

      set.orderItems = action.data

      return set;


    default:
      return state

  }
}

export default worders