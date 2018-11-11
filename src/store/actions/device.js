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