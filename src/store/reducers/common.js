import * as actionTypes from '../actions/actionTypes'

const initState={
    loading: false
}

const reducer=(state=initState,action)=>{

    switch(action.type)
    {
        case actionTypes.LOADING:
            return{ ...state,loading:action.isLoading}
        default:
            return state
    }
}

export default reducer;