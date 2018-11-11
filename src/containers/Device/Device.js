import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as deviceActions from '../../store/actions/device'
import DeviceGrid from '../../components/Device/DeviceGrid/DeviceGrid';
import { Grid} from '@material-ui/core'

class Device extends Component{

    componentDidMount()
    {
        this.props.onLoadDevices();

    }

    render(){
        const deviceGrid = this.props.devices == null ? null : <DeviceGrid devices={this.props.devices} />


        return(
            <Grid container >
                <Grid xs={12} item style={{padding:20,height:'80%'}}>
                    <Grid container spacing={16}>
                        {deviceGrid}
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

const mapStateToProps = state => ({...state.device})

const mapDispatchToProps = dispatch =>{
    return{
        onLoadDevices : () => dispatch(deviceActions.getAll())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( Device);