import axios from 'axios'
import * as actionTypes from './actionTypes'

const setAll = (devices) => {
    return {
        type: actionTypes.DEVICE_LOAD_DEVICES,
        devices: devices
    }
}

export const getAll = () =>{
    return dispatch => {
        axios.get('/users').then(result=>{
            dispatch(setAll(result.data))

        })
    }
}

export const addDevice = (props) => {
    const device = {
        name: props.title,
        family: props.desc,
        username: props.username,
        password: props.password,
        serviceUsers: props.selectedServices.map(item => ({serviceId: item }))
    }

    return dispatch => {
        return new Promise(resolve => {
            axios.post('/users', device).then(result => {
                dispatch(getAll())
                resolve();
            })
        })
    }
}

export const onSelectServiceChanged = (guid) =>
{
    return{
        type: actionTypes.DEVICE_ON_SELECT_SERVICE,
        id: guid
    }
}

export const onFieldChanged = (field, value) => {
    return {
        type: actionTypes.DEVICE_FIELD_CHANGE,
        field: field,
        value: value
    }
}

export const resetForms = () => {
    return {
        type: actionTypes.DEVICE_CLEAR_FORMS
    }
}

export const onSelectDevice = guid =>
{
    return{
        type : actionTypes.DEVICE_SELECT_DEVICE,
        id : guid

    }
}