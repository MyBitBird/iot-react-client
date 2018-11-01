import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as serviceActions from '../../store/actions/service'
import classes from './Service.css'
import { Grid } from '@material-ui/core';
import ServiceGrid from '../../components/Service/ServiceGrid/ServiceGrid';

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
            <Grid container className={classes.container}>
                <Grid xs={12} item>
                    {serviceGrid}
                </Grid>
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