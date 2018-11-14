import React from 'react'
import { Select, MenuItem} from '@material-ui/core'
import {connect} from 'react-redux'

const ServicesSelect = (props) =>{
    return(
        <Select  fullWidth
            value={props.selectedValue} 
            onChange={event => props.onChange(event.target.value)}>
            {props.services.map(service => <MenuItem key={service.id} value={service.id}>{service.title}</MenuItem>)}
            
        </Select>

    )
}

const mapStateToProps = state => ({...state.service})

export default connect(mapStateToProps)(ServicesSelect);