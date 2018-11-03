import React from 'react'
import { Modal, Paper } from '@material-ui/core';

const MyModal = (props)=>{
    const style = {
        width: '30%',
        height: '50%',
        margin: 'auto',
        position: 'absolute'
    }

    return(
        <Modal style={style} open={props.open}>
            <Paper style={{ padding: 15 }}>
                {props.children}
            </Paper>
        </Modal>

    )
}

export default MyModal;