import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware,createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import authReducer from './store/reducers/auth'
import serviceReducer from './store/reducers/service'
import thunk from 'redux-thunk'
import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const reducers = combineReducers({ auth: authReducer, service: serviceReducer});
const store=createStore(reducers, applyMiddleware(thunk));

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

axios.defaults.baseURL="http://localhost:5000/api/";


ReactDOM.render(<Provider store={store}><BrowserRouter><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></BrowserRouter></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
