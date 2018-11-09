import React from 'react'
import { Paper } from '@material-ui/core';

const EmptyMessage = (props)=>{

    const style={
        padding:10,
        width:'80%',
        margin: 'auto'
    }

    return(
        <Paper style={style}>{props.children == null ? 'Nothing is defined!' : props.children}</Paper>

    )
}


export default EmptyMessage;