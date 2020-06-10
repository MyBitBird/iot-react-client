import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import classes from './DeviceInfo.css'
import DeviceIcon from '@material-ui/icons/Router'
import * as deviceActions from '../../../store/actions/device'
import {connect} from 'react-redux'

const DeviceInfo = (props) => {
    return (
        <Grid xs={12} md={3} item >
            <Paper  
                className={[classes.container, props.device.id === props.selectedId ? classes.selectedDevice : classes.notSelectedDevice].join(' ')}
                onClick={() => props.onSelectDevice(props.device.id)}>
                <div className={classes.iconContainer}>
                    <DeviceIcon style={{ fontSize: 50 }} color='secondary' />
                </div>
                <div className={classes.detailsContainer}>
                    <Typography variant="h5" component="h3">
                        {props.device.name} 
                    </Typography>
                    <Typography variant="h6" >
                        {props.device.family}
                    </Typography>
                    <span>
                        {props.device.username}
                    </span>
                </div>
            </Paper>
        </Grid>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectDevice : (id) => dispatch( deviceActions.onSelectDevice(id) )
    }
}

const mapStateToProps = state => ({...state.device})

export default connect(mapStateToProps,mapDispatchToProps)(DeviceInfo);