import React from 'react'
import { Paper } from '@material-ui/core';
import { FormControlLabel, Switch } from '@material-ui/core'

const ServiceItem = (props) => {
    return (

        <Paper style={style.container}>
            <label>
                {props.service.title}
            </label>
            <Switch color='secondary' onChange={() => props.onChange(props.service.id)} checked={props.isSelected} value={props.service.id} />
        </Paper>
    )
}
const style = {
    container: {
        margin: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
}

export default ServiceItem;