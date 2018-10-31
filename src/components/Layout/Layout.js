import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import {connect} from 'react-redux'
import axiosHandler from '../../utils/axiosHandler'
import MenuBar from '../MenuBar/MenuBar'

class Layout extends Component {
    render() {
        
        const menuBar =  this.props.isAuthenticated ? <MenuBar />  : null;

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