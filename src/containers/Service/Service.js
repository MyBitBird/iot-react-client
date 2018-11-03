import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as serviceActions from '../../store/actions/service'
import classes from './Service.css'
import { Grid } from '@material-ui/core';
import ServiceGrid from '../../components/Service/ServiceGrid/ServiceGrid';
import CircleButton from '../../components/UI/CircleButton/CircleButton';
import ButtonsBar from '../../components/UI/ButtonsBar/ButtonsBar';

class Service  extends Component
{
    
    componentDidMount()
    {
        this.props.getServices();
    }

    render()
    {
        const serviceGrid = this.props.services==null ? null : <ServiceGrid services={this.props.services} />
        
        return(
            <Grid container >
                <Grid xs={12} item className={classes.container}>
                    {serviceGrid}
                </Grid>
                <ButtonsBar>
                    <CircleButton visible={this.props.selectedId} type='delete' color='secondary' />
                    <CircleButton visible={this.props.selectedId} type='edit' color='secondary' />
                    <CircleButton visible type='add' color='primary' />
                </ButtonsBar>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({...state.service})

const mapDispatchToProps = dispatch=>{
    return{
        getServices: () => dispatch(serviceActions.getAll())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( Service);