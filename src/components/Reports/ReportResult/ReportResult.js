import React from 'react'
import { connect } from 'react-redux'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const ReportResult = (props) => {

    const serviceId = props.match.params.serviceId;
    const style={
        container:{
            padding: 20
        }
    }
    return (
        <div style={style.container}>
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {props.columns.map((column, index) => <TableCell key={index}>{column}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row, index) =>
                        <TableRow key={index}>
                            {row.map((col, index) => <TableCell key={index}> {col}</TableCell>)}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Paper>
        </div>
    )
}

const mapStateToProps = state => ({ ...state.report })

export default connect(mapStateToProps)(ReportResult);