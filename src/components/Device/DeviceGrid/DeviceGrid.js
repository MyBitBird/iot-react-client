import React from 'react'
import Aux from '../../../utils/Auxilary'
import EmptyMessage from '../../EmptyMessage/EmptyMessage';
import DeviceInfo from '../DeviceInfo/DeviceInfo'

const DeviceGrid = (props) => {
    return(
        <Aux>
            {props.devices.length == 0 ?
                <EmptyMessage /> :
                props.devices.map(device => <DeviceInfo device={device} key={device.id} />)
            }
        </Aux>

    )
}

export default DeviceGrid;