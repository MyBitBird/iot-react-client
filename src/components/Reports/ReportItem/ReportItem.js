import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import Aux from '../../../utils/Auxilary';
import {connect} from 'react-redux'
import * as reportActions from '../../../store/actions/report'
import ReportModal from '../ReportModal/ReportModal';

const ReportItem = (props) => {

    const REPORT_NAME = props.name;
    
    const style = {
        padding: 10,
        backgroundColor: props.color,
        minHeight: 150,
        cursor: props.disable ? 'cursor' : 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        color: '#ffffff',
        flexDirection:'column'
    }

    const onFinishHandler = () =>
    {
        props.setSelectedReport('');
        props.onFinish();
    }

    const getPropsHandler = field => props[field]

    
    return (
        <Aux>
            <Paper style={style} onClick={!props.disable ? ()=>props.setSelectedReport(REPORT_NAME) : null}>
                <Typography color='inherit' variant="h4" >
                    {props.title}
                </Typography>
                
                {props.disable ? <span >(disabled)</span> :  null}

            </Paper>
            <ReportModal 
                title={props.title} 
                open={props.selectedReport == REPORT_NAME}
                selectedService={props.selectedService} 
                onSelectedServiceChanged={props.setSelectedServiceHandler}
                onClose={()=>props.setSelectedReport('')}
                onTextChanged = {props.onTextChangedHandler}
                onFinish={()=>onFinishHandler()}
                getPropsHandler={getPropsHandler} /> 
           
        </Aux>
    )
}



const mapStateToProps = state => ({...state.report})

const mapDispatchToProps = dispatch =>
{
    return{
        setSelectedReport : (report) => dispatch(reportActions.setSelectedReport(report)),
        setSelectedServiceHandler : (service) => dispatch(reportActions.setSelectedService(service)),
        onTextChangedHandler : (event) => dispatch(reportActions.onFieldChanged(event.target.name,event.target.value))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportItem);