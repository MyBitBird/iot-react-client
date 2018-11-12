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

    return(
        <Modal open={props.open}>
            <Stepper steps={['Device Info', 'Service Accessibility']} onClose={props.onClose} onSave={saveItemHandler}>
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
        onResetForm : () => dispatch(deviceActions.resetForms())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeviceModal);