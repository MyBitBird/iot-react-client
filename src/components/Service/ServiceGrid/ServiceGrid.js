import React from 'react'
import Aux from '../../../utils/Auxilary'
import EmptyMessage from '../../EmptyMessage/EmptyMessage';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const ServiceGrid = (props)=>{
    return(
        <Aux>
            {props.services.length==0 ? 
                <EmptyMessage /> : 
                 props.services.map(service=><ServiceInfo service={service} key={service.id} />)
            }
        </Aux>

    )
}

export default ServiceGrid;