import React from 'react'
import { Typography,  TextField, FormControl, Button } from '@material-ui/core'
import moment from 'moment'
import Modal from '../../UI/Modal/Modal'
import ServicesSelect from '../../Service/ServicesSelect/ServicesSelect';

const ReportModal = (props) =>
{
    return(
        <Modal open={props.open}>
            <FormControl fullWidth>
                <div style={style.container}> 
                    <Typography color='secondary' variant="h6" >
                    {props.title}
                    </Typography>
                </div>
                <br />
                <span>Select Service:</span>
                <ServicesSelect selectedValue={props.selectedService} onChange={props.onSelectedServiceChanged} />
                <br />
                <TextField onChange={event => props.onTextChanged(event)} name='from' label='Select Start Date' type='datetime-local' value={props.getPropsHandler('from')} />
                <br />
                <TextField onChange={event => props.onTextChanged(event)} name='to' label='Select End Date' type='datetime-local' value={props.getPropsHandler('to')} />
                <br />
                <div style={style.buttonsRow}>
                    
                    <Button onClick={props.onClose} color='primary'> Close</Button>
                    <Button onClick={props.onFinish} variant='contained' color='primary'> Finish</Button>

                </div>
            </FormControl>
        </Modal>

    )
}
const style={
    container:{
        textAlign: 'center',
        margin:5
    }
    ,
    buttonsRow: {
        textAlign: 'right'
    }
}

export default ReportModal;