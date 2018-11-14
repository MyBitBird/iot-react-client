import * as actionTypes from './actionTypes'

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

