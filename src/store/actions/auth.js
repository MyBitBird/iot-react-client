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

export const login = (props) => {
    const user = { username: props.username, password: props.password }
    return dispatch => {
        axios.post('users/Authenticate', user).then(result => {
            dispatch(setLogin(result.data.token));

        })
    }
}

export const checkToken = (token) => {
    return dispatch => {
        const instance = axios.create();
        instance.defaults.headers.common['authorization'] = `Bearer ${token}`
        instance.get('users/Refresh').then(result => {
            dispatch(setLogin(result.data.token))
        })
    }
}

export const onFieldChanged = (filed, value) => {
    return {
        type: actionTypes.AUTH_FIELD_CHANGE,
        filed: filed,
        value: value
    }
}

export const onRegister = (props) => {
    const user = {
        username: props.username,
        password: props.password,
        name: props.name,
        family: props.family
    }

    return dispatch => {
        axios.post('users/SignUp', user).then(result => {
            dispatch(setLogin(result.token))

        })
    }
}

export const logOut = () =>
{
    localStorage.removeItem('token');
    return{ type: actionTypes.LOGOUT}
}

