import * as actionTypes from './actionTypes'

export const loading =(isLoading)=>{
    return{type: actionTypes.LOADING,isLoading: isLoading}
}