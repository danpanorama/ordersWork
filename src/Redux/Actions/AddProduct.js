import {PRODUCT_FAIL,ADD_ORDER,DEL_ORDER,ADD_ARGAZ,BOSS, SETEFFECT} from '../constants/WorkerConstant'

export const addProduct = (data) => async (dispatch)=>{
    try{

        

        dispatch({type:ADD_ORDER,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const delProduct = (data) => async (dispatch)=>{
    try{

        

        dispatch({type:DEL_ORDER,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const addargaz = (data) => async (dispatch)=>{
    try{

        

        dispatch({type:ADD_ARGAZ,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const addboss = (data) => async (dispatch)=>{
    try{

        dispatch({type:BOSS,data:data});
        

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const set = () => async (dispatch)=>{
    try{
        let all = localStorage.getItem('order1');
        if(all != 'undefined' && all != undefined){
            let data = JSON.parse(all);
            dispatch({type:SETEFFECT,data:data});


        }

        

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}