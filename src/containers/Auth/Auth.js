import React, { Component } from 'react'
import { Paper, Grid, Button } from '@material-ui/core'
import TextField from '../../components/UI/TextField/TextField'
import Aux from '../../utils/Auxilary'
import classes from './Auth.css'
import bg from '../../assets/images/bitbird.png'
class Auth extends Component {
    state={
        isInRegisterMode : false

    }
    toggleRegisterModeHandler=()=> this.setState((preState)=>{return {isInRegisterMode: !preState.isInRegisterMode}})

    render() {
        const style = {backgroundImage: `url(${bg})`}
        
        const registerFields = <Aux>
            <TextField fullWidth type="password" label="Re-Password" />
            <TextField fullWidth label="Name" />
            <TextField fullWidth label="Family" />
        </Aux>

        return (

            <Grid container className={classes.container} >
                <Grid xs={4} item />
                <Grid xs={4} item>
                    <Paper className={classes.loginPanel}>
                        <Grid container>
                            <Grid xs={12} item style={style} className={classes.loginHeader} />
                            <Grid xs={12} className={classes.loginText}><h3>Login</h3></Grid>        
                            <TextField fullWidth label="Username" />
                            <TextField type="password" fullWidth label="Password" />
                            {
                                this.state.isInRegisterMode ? registerFields : null
                            }
                            <Grid container >
                                <Grid xs={12} className={classes.buttonsGrid}>
                                    <Button fullWidth variant="contained" color="secondary" >{this.state.isInRegisterMode ? 'Register' : 'Login'}</Button>
                                </Grid>
                                <Grid xs={12} className={classes.buttonsGrid}>
                                    <Button onClick={this.toggleRegisterModeHandler} fullWidth color="primary" >{this.state.isInRegisterMode ? 'Login' : 'SignUp'}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <div className={classes.domainText}>BitBird</div>
                </Grid>
                <Grid xs={4} item />
            </Grid>

        )
    }
}

export default Auth;