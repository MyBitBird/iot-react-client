import axios from 'axios'
import * as actionTypes from './actionTypes'

const setLogin = (token)=>{
    localStorage.setItem('token',token);
    return{
        type: actionTypes.LOGIN,
        token: token
    }
}

export const login = (username) => {
    return dispatch => {
        axios.post('users/Authenticate', username).then(result => {
            dispatch(result);

        })
    }
}