import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as deviceActions from '../../store/actions/device'
import * as serviceActions from '../../store/actions/service'
import DeviceGrid from '../../components/Device/DeviceGrid/DeviceGrid';
import { Grid} from '@material-ui/core'
import ButtonsBar from '../../components/UI/ButtonsBar/ButtonsBar'
import CircleButton from '../../components/UI/CircleButton/CircleButton'
import DeviceModal from '../../components/Device/DeviceModal/DeviceModal'

class Device extends Component{

    state = {
        isAddDialogOpen: false

    }
    
    componentDidMount()
    {
        this.props.loadDevices();
        this.props.loadServices();

    }

    toggleServiceDialogHandler = () => this.setState(preState => { return { isAddDialogOpen: !preState.isAddDialogOpen } })


    onAddButtonClick = () => {
//        this.props.resetForms();
        this.toggleServiceDialogHandler();
    }

    render(){
        const deviceGrid = this.props.devices == null ? null : <DeviceGrid devices={this.props.devices} />


        return(
            <Grid container >
                <DeviceModal open={this.state.isAddDialogOpen} onClose={this.toggleServiceDialogHandler} />
                <Grid xs={12} item style={{padding:20,height:'80%'}}>
                    <Grid container spacing={16}>
                        {deviceGrid}
                    </Grid>
                </Grid>
                <ButtonsBar>
                    <CircleButton onClick={() => this.props.deleteDevice(this.props.selectedId)} visible={this.props.selectedId != null ? 1 : 0} type='delete' color='secondary' />
                    <CircleButton visible={this.props.selectedId != null ? 1 : 0} type='edit' color='secondary' />
                    <CircleButton onClick={this.onAddButtonClick} visible={1} type='add' color='primary' />
                </ButtonsBar>
            </Grid>

        )
    }
}

const mapStateToProps = state => ({...state.device})

const mapDispatchToProps = dispatch =>{
    return{
        loadDevices : () => dispatch(deviceActions.getAll()),
        loadServices : () => dispatch(serviceActions.getAll()),
        deleteDevice : (id) => dispatch(deviceActions.deleteDevice(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( Device);