import * as actionTypes from '../actions/actionTypes'

const initState = {
    devices: null,
    selectedId: null,
    title: '',
    desc: '',
    username: '',
    password: '',
    selectedServices: []
    
}

const reducer = ( state = initState , action ) =>{

    switch(action.type)
    {
        case actionTypes.DEVICE_FIELD_CHANGE:
            return { ...state, [action.field]: action.value }

        case actionTypes.DEVICE_LOAD_DEVICES:
            return {...state,devices: action.devices}

        case actionTypes.DEVICE_SELECT_DEVICE:
            return {...state,selectedId: state.selectedId == action.id ? null : action.id }

        case actionTypes.DEVICE_ON_SELECT_SERVICE:
            const serviceId = action.id;
            const isIdExist = state.selectedServices.indexOf(serviceId)!=-1;
            return{ ...state, 
                selectedServices: isIdExist ? state.selectedServices.filter(id => id != serviceId) : state.selectedServices.concat(serviceId)}

        case actionTypes.DEVICE_CLEAR_FORMS:
            return { ...initState, devices: state.devices };

        case actionTypes.DEVICE_LOAD_DEVICE_INFO:
            const device = action.deviceInfo;
            return { ...state, title: device.name,
                        desc: device.family,
                        username: device.username,
                        selectedServices: device.serviceUsers.map(service => service.serviceId) }

        default:
            return state;
    }
}

export default reducer;
