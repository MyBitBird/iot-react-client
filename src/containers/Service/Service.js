import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as serviceActions from '../../store/actions/service'
import classes from './Service.css'
import { Grid } from '@material-ui/core';
import ServiceGrid from '../../components/Service/ServiceGrid/ServiceGrid';
import CircleButton from '../../components/UI/CircleButton/CircleButton';
import ButtonsBar from '../../components/UI/ButtonsBar/ButtonsBar';
import ServiceModal from '../../components/Service/ServiceModal/ServiceModal';

class Service extends Component {

    state={
        isAddDialogOpen : false

    }

    componentDidMount() {
        this.props.getServices();
    }
    
    toggleServiceDialogHandler = () => this.setState(preState=>{return {isAddDialogOpen:!preState.isAddDialogOpen}})

    saveServiceHandler = () =>{

    }

    render() {
        const serviceGrid = this.props.services == null ? null : <ServiceGrid services={this.props.services} />

        return (
            <Grid container >
                <ServiceModal open={this.state.isAddDialogOpen} onClose={this.toggleServiceDialogHandler}  />
                <Grid xs={12} item className={classes.container}>
                    <Grid container spacing={16}>
                        {serviceGrid}
                    </Grid>
                </Grid>
                <ButtonsBar>
                    <CircleButton visible={0} type='delete' color='secondary' />
                    <CircleButton visible={0} type='edit' color='secondary' />
                    <CircleButton visible={1} type='add' color='primary' onClick={this.toggleServiceDialogHandler} />
                </ButtonsBar>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({ ...state.service })

const mapDispatchToProps = dispatch => {
    return {
        getServices: () => dispatch(serviceActions.getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service);