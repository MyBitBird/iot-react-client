import React, { Component } from 'react';
import Auth from './containers/Auth/Auth';
import Layout from './components/Layout/Layout'
import classes from './App.css'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import Service from './containers/Service/Service';
import Axios from 'axios';
import * as authAction from './store/actions/auth'
import {connect} from 'react-redux'
import ServiceDetails from './components/Service/ServiceDetails/ServiceDetails'
import Device from './containers/Device/Device'
import Report from './containers/Report/Report'
import ReportResult from './components/Reports/ReportResult/ReportResult'

class App extends Component {
  
  componentDidMount(){
    if (localStorage.getItem('token') != null)
      this.props.checkTokenHandler(localStorage.getItem('token'));
  }
  
  render() {

   

    const routes = this.props.isAuthenticated ? 
      <Switch>
        <Route path="/Details/:id" component={ServiceDetails} />
        <Route path="/Devices" component={Device} />
        <Route path="/ReportResult/:serviceId" component={ReportResult} />
        <Route path="/Reports" component={Report} />
        <Route path="/" component={Service} />
      </Switch>
      :
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

const mapStateToProps = state=>{
  return { isAuthenticated : state.auth.isAuthenticated}
}

const mapDispatchToProps = dispatch =>{
  return {
    checkTokenHandler : (token) => dispatch(authAction.checkToken(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
