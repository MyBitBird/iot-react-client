import * as actionTypes from '../actions/actionTypes'

const initState={
    services: null
}

const reducer = (state = initState,action)=>{
    
    switch(action.type)
    {
        case actionTypes.SERVICE_FIELD_CHANGE:
            return { ...state, [action.field]: action.value }
        case actionTypes.SERVICE_LOAD_SERVICE:
            return { ...state, services: action.services }
        default:
            return state; 
    }

}

export default reducer;