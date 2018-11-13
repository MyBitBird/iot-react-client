import React from 'react'
import Modal from '../../UI/Modal/Modal'
import Stepper from '../../../containers/Stepper/Stepper'
import DeviceRegister from '../DeviceRegister/DeviceRegister'
import DeviceServices from '../DeviceServices/DeviceServices';
import {connect} from 'react-redux'
import * as deviceActions from '../../../store/actions/device'

const DeviceModal = (props) =>
{
    const saveItemHandler = () => props.onSave({...props}).then(() => {
        props.onClose();
        props.onResetForm();
    });

    const updateItemHandler = () => props.onUpdate(props.selectedId, {...props}).then(() => {
        props.onClose();
        props.onResetForm();
    });

    return(
        <Modal open={props.open}>
            <Stepper steps={['Device Info', 'Service Accessibility']} onClose={props.onClose} onSave={props.selectedId == null ? saveItemHandler : updateItemHandler}>
                <DeviceRegister />
                <DeviceServices />
            </Stepper>
        </Modal>

    )
}

const mapStateToProps = state => ({...state.device})

const mapDispatchToProps = dispatch => {
    return{
        onSave : (props) => dispatch(deviceActions.addDevice(props)),
        onResetForm : () => dispatch(deviceActions.resetForms()),
        onUpdate : (id,props) => dispatch(deviceActions.editDevice(id,props))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeviceModal);