import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as serviceActions from '../../store/actions/service'
import classes from './Service.css'
import { Grid } from '@material-ui/core';
class Service  extends Component
{
    
    componentDidMount()
    {
        this.props.getServices();
    }

    render()
    {
        return(
            <Grid container className={classes.container}>
                <Grid xs={12} item>
                    {this.props.services==null ? 'null' : this.props.services.map(service=>  <span>{service.title}</span>)}
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