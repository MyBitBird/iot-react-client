import React from 'react'
import { connect } from 'react-redux'
import ServiceItem from './ServiceItem'
import * as deviceActions from '../../../store/actions/device'

const DeviceServices = (props) => {

    return (
        <div style={style.container}>
            <div style={style.helper}>
                <span>Select this device accessible services.</span>
            </div>
            {props.services == null
                ? null :
                props.services.map(service => <ServiceItem
                    onChange={props.onSelectServiceChanged}
                    isSelected={props.selectedServices.indexOf(service.id) != -1}
                    service={service}
                    key={service.id} />)}

        </div>
    )
}
const style={
    container:{
        margin:10
    },
    helper:{
        textAlign: 'center', padding: 5 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectServiceChanged: (guid) => dispatch(deviceActions.onSelectServiceChanged(guid))

    }
}

const mapStateToProps = state => ({ ...state.service, ...state.device })

export default connect(mapStateToProps, mapDispatchToProps)(DeviceServices);