import React from 'react'
import TextField from '../../UI/TextField/TextField'
import { connect } from 'react-redux'
import * as deviceActions from '../../../store/actions/device'

const DeviceRegister = (props) =>{
    return(
        <div>
            <TextField onChange={event => props.onTextChanged(event)} value={props.title}  name='title' required label='Title' fullWidth/>
            <TextField onChange={event => props.onTextChanged(event)} value={props.desc} name='desc' label='Desc' fullWidth />
            <TextField onChange={event => props.onTextChanged(event)} value={props.username}  name='username' required label='Username' fullWidth />
            <TextField onChange={event => props.onTextChanged(event)} value={props.password} name='password'  required label='Password' fullWidth type='password'/>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onTextChanged: (event) => dispatch(deviceActions.onFieldChanged(event.target.name, event.target.value))
    }
}

const mapStateToProps = state => ({...state.device})


export default connect(mapStateToProps,mapDispatchToProps)(DeviceRegister);