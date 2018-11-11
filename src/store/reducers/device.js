import * as actionTypes from '../actions/actionTypes'

const initState = {
    devices: null
}

const reducer = ( state = initState , action ) =>{

    switch(action.type)
    {
        case actionTypes.DEVICE_LOAD_DEVICES:
            return {...state,devices: action.devices}
        default:
            return state;
    }
}

export default reducer;
