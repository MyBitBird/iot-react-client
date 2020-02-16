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
        errors: []
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.formValidation();
    }

    formValidation = () => {
        const errors = [];
        if (this.state.isInRegisterMode) {
            if (this.props.password != this.props.rePassword) errors.push('Password & RePassword are not equal.')
            if (this.props.password.length < 5) errors.push('Password must be longer than 5 characters.')
        }

        this.setState({ errors: errors }, () => errors.length == 0 ? this.actionHandler() : null);
    }

    toggleRegisterModeHandler = () => this.setState(preState => { return { isInRegisterMode: !preState.isInRegisterMode } })

    actionHandler = () => {
        if (this.state.isInRegisterMode)
            this.props.onRegister({ ...this.props })
        else
            this.props.onLogin({ ...this.props })
    }

    render() {
        const style = { backgroundImage: `url(${bg})` }

        const registerFields = <Aux>
            <TextField required fullWidth type="password" label="Re-Password" name='rePassword' onChange={event => this.props.onFieldChanged(event)} />
            <TextField required fullWidth label="Name" name='name' onChange={event => this.props.onFieldChanged(event)} />
            <TextField required fullWidth label="Family" name='family' onChange={event => this.props.onFieldChanged(event)} />
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
                                <Grid xs={12} item className={classes.errorPanel}>
                                    {
                                        this.state.errors.map(error => <span>* {error}<br /></span>)
                                    }
                                </Grid>
                                <TextField required fullWidth label="Username" name="username" onChange={event => this.props.onFieldChanged(event)} />
                                <TextField required type="password" name='password' fullWidth label="Password" onChange={event => this.props.onFieldChanged(event)} />
                                {
                                    this.state.isInRegisterMode ? registerFields : null
                                }
                                <Grid container >
                                    <Grid xs={12} item className={classes.buttonsGrid}>
                                        <Button type='submit' fullWidth variant="contained" color="secondary" >{this.state.isInRegisterMode ? 'Register' : 'Login'}</Button>
                                    </Grid>
                                    <Grid xs={12} item className={classes.buttonsGrid}>
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

const mapDispathToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(authActions.login(user)),
        onFieldChanged: (event) => dispatch(authActions.onFieldChanged(event.target.name, event.target.value)),
        onRegister: (user) => dispatch(authActions.onRegister(user))
    }
}

const mapStateToProps = state => ({ ...state.auth })


export default connect(mapStateToProps, mapDispathToProps)(Auth);