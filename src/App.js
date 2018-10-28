import React, { Component } from 'react';
import Auth from './containers/Auth/Auth';
import Layout from './components/Layout/Layout'
import classes from './App.css'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard';
import Axios from 'axios';
import * as authAction from './store/actions/auth'

class App extends Component {
  
  
  render() {

    if(localStorage.getItem('token')!=null)
        authAction.checkToken();
    
    return (
      <Layout>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/" component={Auth} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
