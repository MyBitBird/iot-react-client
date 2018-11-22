import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setSelectedService = (selectedService) =>
{
    return{
        type: actionTypes.REPORT_SET_SELECTED_SERVICE,
        selectedService : selectedService
    }
}

export const setSelectedReport = (selectedReport) =>
{
    return {
        type: actionTypes.REPORT_SET_SELECTED_REPORT,
        selectedReport : selectedReport
    }
}

export const getData = (guid,filters) =>
{
   // return dispatch => {
        return new Promise(resolve => {
            axios.get(`/Data/${guid}?${filters}`).then(result => {
                resolve(result.data);
            })
        }
        )
  //  }
}


export const onFieldChanged = (field, value) => {
    return {
        type: actionTypes.REPORT_FIELD_CHANGE,
        field: field,
        value: value
    }
}

export const setReportResult = (rows,columns) =>
{
    return{
        type: actionTypes.REPORT_SET_RESULT,
        rows: rows,
        columns: columns
    }
}

