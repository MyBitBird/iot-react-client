import * as actionTypes from '../actions/actionTypes'

const initState = {
    isAuthenticated: false,
    token: null

};

const resucer = (state = initState,action)=>{

    switch(action.type)
    {
        case actionTypes.LOGIN:
            return {...state,isAuthenticated:true,token:action.token}
        default :
            return state;            
    }
}

export default resucer;