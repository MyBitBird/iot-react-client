import React from 'react'
import { Paper, Typography, Grid } from '@material-ui/core';
import classes from './ServiceInfo.css'
import CloudIcon from '@material-ui/icons/Cloud'
const ServiceInfo = (props) => {

    return (
        <Grid xs={3} item >
            <Paper className={classes.container}>
                <CloudIcon fontSize="large" className={classes.icon} />
                <Typography className={classes.text} variant="h5" component="h3">
                    {props.service.title}
                </Typography>
                <Typography className={classes.text}  component="p">
                    {props.service.id}
                </Typography>

            </Paper>
        </Grid>

    )
}

export default ServiceInfo;