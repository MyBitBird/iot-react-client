import * as actionTypes from '../actions/actionTypes'
import moment from 'moment'

const initState ={
    selectedReport: '',
    selectedService: '',
    from: moment().add(-1, 'days').format('YYYY-MM-DDT00:00'),
    to: moment().format('YYYY-MM-DDT23:59'),
    rows: [],
    columns: []

}

const reducer = (state = initState , action) =>
{
    switch(action.type){
        
        case actionTypes.REPORT_FIELD_CHANGE:
            return { ...state, [action.field]: action.value }

        case actionTypes.REPORT_SET_SELECTED_REPORT:
            return {...state,selectedReport : action.selectedReport}

        case actionTypes.REPORT_SET_SELECTED_SERVICE:
            return {...state,selectedService : action.selectedService}

        case actionTypes.REPORT_SET_RESULT:
            return { ...state, rows: action.rows , columns: action.columns}

        
        default :
            return state
    }
}

export default reducer;