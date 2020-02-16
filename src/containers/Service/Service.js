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

    state = {
        isAddDialogOpen: false
    }

    componentDidMount() {
        this.props.getServices();
    }

    editServiceHandler = () => this.props.getServiceInfo(this.props.selectedId).then(this.setState({ isAddDialogOpen: true }))

    openAddDialog = () => this.setState({ isAddDialogOpen: true })

    closeAddDialog = () => this.setState({ isAddDialogOpen: false })

    onAddButtonClick = () => {
        this.props.resetForms();
        this.openAddDialog();
    }

    render() {
        const serviceGrid = this.props.services == null ? null : <ServiceGrid services={this.props.services} />

        return (
            <Grid container >
                <ServiceModal open={this.state.isAddDialogOpen} onClose={this.closeAddDialog} />
                <Grid xs={12} item className={classes.container}>
                    <Grid container spacing={16}>
                        {serviceGrid}
                    </Grid>
                </Grid>
                <ButtonsBar>
                    <CircleButton onClick={() => this.props.deleteService(this.props.selectedId)} visible={this.props.selectedId != null} type='delete' color='secondary' />
                    <CircleButton onClick={this.editServiceHandler} visible={this.props.selectedId != null} type='edit' color='secondary' />
                    <CircleButton onClick={this.onAddButtonClick} visible={true} type='add' color='primary' />
                </ButtonsBar>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({ ...state.service })

const mapDispatchToProps = dispatch => {
    return {
        getServices: () => dispatch(serviceActions.getAll()),
        deleteService: (guid) => dispatch(serviceActions.deleteService(guid)),
        getServiceInfo: (guid) => dispatch(serviceActions.getServiceDetailsById(guid)),
        resetForms: () => dispatch(serviceActions.resetForms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service);