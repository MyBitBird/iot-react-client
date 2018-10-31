import React from 'react'
import { Grid, Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import classes  from './MenuBar.css'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import logo from '../../assets/images/bitbird.png'
import CloudIcon from '@material-ui/icons/Cloud'
import AtachIcon from '@material-ui/icons/AttachFile'
import ReportIcon from '@material-ui/icons/Poll'
import DeviceIcon from '@material-ui/icons/Router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const MenuBar =()=>{

    return(
        <AppBar position="static">
            <Toolbar>
                <Grid item xs={11}>
                    <Link to='services'>
                        <BottomNavigationAction className={classes.selectedLinks} showLabel label="Services" icon={<CloudIcon />} />
                    </Link>
                    <Link to='Properties'>
                        <BottomNavigationAction className={classes.selectedLinks} showLabel label="Properties" icon={<AtachIcon />} />
                    </Link>
                    <Link to='Reports'>
                        <BottomNavigationAction className={classes.selectedLinks} showLabel label="Reports" icon={<ReportIcon />} />
                    </Link>
                    <Link to='Devices'>
                        <BottomNavigationAction className={classes.selectedLinks} showLabel label="Devices" icon={<DeviceIcon />} />
                    </Link>
                </Grid>
                <Button color="inherit" className={classes.rightLinks}  >Logout</Button>
                <img src={logo} width="80" height="80" />
            </Toolbar>
       </AppBar>

    )
}

export default MenuBar;