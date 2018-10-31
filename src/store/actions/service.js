import axios from 'axios'
import * as actionTypes from './actionTypes'


 const setAll=(services)=>
 {
     return{
         type: actionTypes.SERVICE_LOAD_SERVICE,
         services: services
     }
 }

export const getAll = ()=>{
    return dispatch=>{
        axios.get('/Services').then(result => {
            dispatch(setAll(result.data))
        })
    }
}