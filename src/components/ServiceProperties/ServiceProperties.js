import React from 'react'
import Aux from '../../utils/Auxilary';
import { connect } from 'react-redux'
import * as serviceActions from '../../store/actions/service'
import { Button, TextField } from '@material-ui/core'
import classes from './ServiceProperties.css'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'

const ServiceProperties = (props) => {
    return (
        <Aux>
            <div className={classes.container}>
                {props.serviceProperties.map((properties, index) =>
                    <div className={classes.propertiesContainer} key={index}>
                        <TextField onChange={(event) => props.onPropertyTitleChanged(index,event.target.value)} className={classes.textField} autoFocus value={properties.title} required label='Property Title' />
                        <TextField onChange={(event) => props.onPropertyCodeChanged(index, event.target.value)}  autoFocus value={properties.code} required label='Property Code' />
                        <Button onClick={()=>props.onRemoveProperty(index)} className={classes.clearButton} mini className={classes.clearButton} color='secondary' variant='outlined'>X</Button>
                    </div>
                )
                }

            </div>
            <Button color='secondary' variant='outlined' fullWidth onClick={props.onAddProperty}><AddIcon /></Button>
        </Aux>

    )
}

const mapDispatchToProps = dispatch => {
    return { onAddProperty : () => dispatch(serviceActions.newPropertyHandler()),
             onRemoveProperty : (index) => dispatch(serviceActions.removePropertyHandler(index)),
             onPropertyTitleChanged : (index,value) => dispatch(serviceActions.onPropertyTitleChanged(index,value)),
             onPropertyCodeChanged: (index, value) => dispatch(serviceActions.onPropertyCodeChanged(index, value)) }
}

const mapStateToProps = state => ({ ...state.service })


export default connect(mapStateToProps, mapDispatchToProps)(ServiceProperties);