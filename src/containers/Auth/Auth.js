import React, { Component } from 'react'
import { Paper, Grid, Button } from '@material-ui/core'
import TextField from '../../components/UI/TextField/TextField'
import Aux from '../../utils/Auxilary'
import classes from './Auth.css'
import bg from '../../assets/images/bitbird.png'
import { connect } from 'react-redux'
import * as authActions from '../../store/actions/auth'

class Auth extends Component {
    state = {
        isInRegisterMode: false,
        username: '',
        password: '',
        rePassword: '',
        name: '',
        family: ''

    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onLogin({ username: this.state.username, password: this.state.password })

    }

    toggleRegisterModeHandler = () => this.setState((preState) => { return { isInRegisterMode: !preState.isInRegisterMode } })

    onTextChangeHandler = event => this.setState({ [event.target.name]: event.target.value })

    render() {
        const style = { backgroundImage: `url(${bg})` }

        const registerFields = <Aux>
            <TextField fullWidth type="password" label="Re-Password" name='rePassword' onChange={event => this.onTextChangeHandler(event)} />
            <TextField fullWidth label="Name" name='name' onChange={event => this.onTextChangeHandler(event)} />
            <TextField fullWidth label="Family" name='family' onChange={event => this.onTextChangeHandler(event)} />
        </Aux>

        return (
            <form onSubmit={event => this.onSubmit(event)}>
            <Grid container className={classes.container} >
                <Grid xs={4} item />
                <Grid xs={4} item>
                    <Paper className={classes.loginPanel}>
                        <Grid container>
                          
                                <Grid xs={12} item style={style} className={classes.loginHeader} />
                                <Grid xs={12} item className={classes.loginText}><h3>Login</h3></Grid>
                                <TextField required fullWidth label="Username" name="username" onChange={event => this.onTextChangeHandler(event)} />
                                <TextField required type="password" name='password' fullWidth label="Password" onChange={event => this.onTextChangeHandler(event)} />
                                {
                                    this.state.isInRegisterMode ? registerFields : null
                                }
                                <Grid container >
                                    <Grid xs={12} className={classes.buttonsGrid}>
                                        <Button type='submit' fullWidth variant="contained" color="secondary" >{this.state.isInRegisterMode ? 'Register' : 'Login'}</Button>
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
            </form>
        )
    }
}

const mapDispathToProps = (dispatch) => {
    return { onLogin: (user) => dispatch(authActions.login(user)) }
}


export default connect(null, mapDispathToProps)(Auth);