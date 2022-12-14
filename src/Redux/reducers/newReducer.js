import * as actionTypes from "../constants/ProductConstants";

const initialState = {
    item: [],
    loading: false,

};

const products = (state = initialState, action) => {
    switch (action.type) {




        case actionTypes.ADD_ITEM:
            const add = {
                ...state,
            };

            return add;

            case actionTypes.AMOUNT:
                const amount = { 
                    ...state,
                };
                for (let i = 0; i < amount.item.length; i++) {
                    if (amount.item[i].name == action.data.name) {
                      
                      amount.item[i].amount =
                      amount.item[i].amount + 1;
                     
                    }
                  }
    
                return amount;


                case actionTypes.DOWNAMOUNT:
                    const sown = {
                        ...state,
                    };
                    for (let i = 0; i < sown.item.length; i++) {
                        if (sown.item[i].name == action.data.name) {
                            if(sown.item[i].amount > 0){
                                 sown.item[i].amount =
                            sown.item[i].amount - 1;
                            }else{
                                return sown
                            }
                          
                           
                         
                        }
                      }
        
                    return sown;



                    
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

        case actionTypes.DEL_ITEM:
            const del = {
                ...state,
            };

            return del;

        case actionTypes.SET_PRODUCT_LIST:
            const set = {
                ...state,
            };
            set.item = action.data
            set.loading = false
            return set;

        case actionTypes.REQUEST_DATA:
            const req = {
                ...state,
            };

            req.loading = true;
            return req;




        default:
            return state

    }
}

export default products