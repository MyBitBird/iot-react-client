import React from 'react'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

const CircleButton = (props) => {
    let icon = null;
    switch (props.type) {
        default:
        case 'add':
            icon = <AddIcon />
            break;
        case 'edit':
            icon = <EditIcon />
            break;
        case 'delete':
            icon = <DeleteIcon />
            break;
    }

    const style = {
        marginLeft: 5
    }


    return (
        props.visible
            ?
            <Button style={style} variant="fab" {...props} >
                {icon}
            </Button>
            : null
    )
}

export default CircleButton;