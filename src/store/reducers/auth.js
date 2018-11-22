import * as actionTypes from '../actions/actionTypes'

const initState = {
    isAuthenticated: false,
    token: null,
    username: '',
    password: '',
    rePassword: '',
    name: '',
    family: '',

};

const resucer = (state = initState,action)=>{

    switch(action.type)
    {
        case actionTypes.LOGIN:
            return {...state,isAuthenticated:true,token:action.token}
        case actionTypes.AUTH_FIELD_CHANGE:
            return {...state,[action.filed]:action.value}
        case actionTypes.LOGOUT:
            return {...initState}
        default :
            return state;            
    }
}

export default resucer;