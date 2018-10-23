import React from 'react'
import {TextField} from '@material-ui/core'

const MyTextField =(props)=>{
    const style={
        marginBottom:'5px'
        
    }
    return(
        <TextField style={style} {...props} />
    )
}

export default MyTextField;