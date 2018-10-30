import axios from 'axios'
import * as actionTypes from './actionTypes'

const setLogin = (token) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`
    return {
        type: actionTypes.LOGIN,
        token: token
    }
}

export const login = (username) => {
    return dispatch => {
        axios.post('users/Authenticate', username).then(result => {
            dispatch(setLogin(result.token));

        })
    }
}

export const checkToken = () => {
    return dispatch => {
        axios.get('users/Refresh').then(result => {
            dispatch(setLogin(result.token))
        })
    }
}

export const onFieldChanged =(filed,value)=>{
    return{
        type:actionTypes.AUTH_FIELD_CHANGE,
        filed:filed,
        value: value
    }
}

export const onRegister=(user)=>{
    return dispatch=>{
        axios.post('users/SignUp',user).then(result=>{
            dispatch(setLogin(result.token))

        })
    }
}

