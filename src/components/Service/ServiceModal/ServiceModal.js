import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '../../UI/TextField/TextField'
import Modal from '../../UI/Modal/Modal'
import Stepper from '../../../containers/Stepper/Stepper'
import {connect} from 'react-redux'
import * as serviceActions from '../../../store/actions/service'
import ServiceProperties from '../../ServiceProperties/ServiceProperties';

const ServiceModal = (props) => {

    const saveItemHandler = ()=> props.onSave(props.title, props.serviceProperties).then(()=>{
        props.onClose();
        props.onResetForm();
    });

    const updateItemHandler = () => props.onUpdate(props.selectedId, props.title, props.serviceProperties).then(()=>{
        props.onClose();
        props.onResetForm();
    });


    return (
        <Modal open={props.open}>
            <Stepper steps={['Service Info', 'Service Properties']} onClose={props.onClose} onSave={props.selectedId==null ? saveItemHandler : updateItemHandler}>
                    <TextField value={props.title} name='title' autoFocus required fullWidth label='Service Title' onChange={event => props.onTextChanged(event)} />
                    <ServiceProperties />
                </Stepper>
        </Modal>
    )
}

const mapDispatchToProps = dispatch=>{
    return { onTextChanged: (event) => dispatch(serviceActions.onFieldChanged(event.target.name, event.target.value)),
             onSave: (title, serviceProperties) => dispatch(serviceActions.addService(title, serviceProperties)),
             onResetForm: () => dispatch(serviceActions.resetForms()),
             onUpdate: (id, title, serviceProperties) => dispatch(serviceActions.editService(id,title,serviceProperties))}
}
const mapStateToProps = state => ({...state.service})

export default connect(mapStateToProps,mapDispatchToProps)( ServiceModal);