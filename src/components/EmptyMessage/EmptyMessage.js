import React from 'react'
import { Paper } from '@material-ui/core';

const EmptyMessage = (props)=>{

    const style={
        padding:15,
        width:'80%',
        margin: '15px auto',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#888888'
    }

    return(
        <Paper style={style}>{props.children == null ? 'Nothing is defined!' : props.children}</Paper>

    )
}


export default EmptyMessage;