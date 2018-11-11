import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import classes from './DeviceInfo.css'
import DeviceIcon from '@material-ui/icons/Router'
const DeviceInfo = (props) => {
    return (
        <Grid xs={3} item >
            <Paper className={classes.container} >
                <div className={classes.iconContainer}>
                    <DeviceIcon style={{ fontSize: 50 }} color='secondary' />
                </div>
                <div className={classes.detailsContainer}>
                    <Typography variant="h5" component="h3">
                        {`${props.device.name} ${props.device.family}`}
                    </Typography>
                    <span>
                        {props.device.username}
                    </span>
                </div>
            </Paper>
        </Grid>

    )
}

export default DeviceInfo;