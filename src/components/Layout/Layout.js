import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
class Layout extends Component {
    render() {

        return (
            <Grid container>
                <Grid item xs={12} >
                    <h2>Menu bar</h2>
                </Grid>
                <Grid item xs={12}>
                    <main>
                        {this.props.children}
                    </main>
                </Grid>

            </Grid>

        )
    }
}

export default Layout;