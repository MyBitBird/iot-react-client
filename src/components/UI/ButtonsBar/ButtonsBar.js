import React from 'react'
import { Grid } from '@material-ui/core';

const ButtonsBar = (props)=>{
    const style = {
        position: 'fixed',
        bottom: 50,
        right: 70
    }
    
    return(
        <Grid style={style} xs={12} item>
            {props.children}
        </Grid>
        
    )
}

export default ButtonsBar;