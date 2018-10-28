import React, { Component } from 'react'
import { Grid,Snackbar } from '@material-ui/core'
import {connect} from 'react-redux'
import axiosHandler from '../../utils/axiosHandler'
class Layout extends Component {
    render() {
        
        const menuBar =  this.props.isAuthenticated ?
                        <Grid item xs={12} >
                            <h2>Menu bar</h2>
                        </Grid> 
                        : null;
        

        return (
            <Grid container>
                {menuBar}
                <Grid item xs={12}>
                    <main>
                        {this.props.children}
                    </main>
                </Grid>
               
            </Grid>

        )
    }
}

const mapStateToProps = state =>{
    return { isAuthenticated: state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(axiosHandler(Layout));