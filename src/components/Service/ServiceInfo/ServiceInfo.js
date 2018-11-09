import React from 'react'
import { Paper, Typography, Grid } from '@material-ui/core';
import classes from './ServiceInfo.css'
import CloudIcon from '@material-ui/icons/Cloud'
import MoreIcon from '@material-ui/icons/MoreHoriz'
import {connect} from 'react-redux'
import * as serviceActions from '../../../store/actions/service'
import {Link} from 'react-router-dom'

const ServiceInfo = (props) => {

    return (
        <Grid xs={3} item >
            <Paper 
                className={[classes.container, props.service.id === props.selectedId ? classes.selectedService : classes.notSelectedService].join(' ')}
                onClick={()=>props.onSelectService(props.service.id)}>
                <CloudIcon fontSize="large" className={classes.icon} />
                <Typography className={classes.title} variant="h5" component="h3">
                    {props.service.title}
                </Typography>
                <Typography className={classes.text}  component="p">
                    {props.service.id}
                </Typography>
                <br />
                <Link className={classes.link} to={`/Details/${props.service.id}`} >More Details</Link>
            </Paper>
        </Grid>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onSelectService: (id) => dispatch(serviceActions.onSelectService(id))
    }
}

const mapStateToProps = state => ({...state.service})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceInfo);