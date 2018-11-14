import * as actionTypes from '../actions/actionTypes'

const initState ={
    selectedReport: '',
    selectedService: '',
}

const reducer = (state = initState , action) =>
{
    switch(action.type){

        case actionTypes.REPORT_SET_SELECTED_REPORT:
            return {...state,selectedReport : action.selectedReport}

        case actionTypes.REPORT_SET_SELECTED_SERVICE:
            return {...state,selectedService : action.selectedService}

        
        default :
            return state
    }
}

export default reducer;