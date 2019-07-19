import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home'
import './App.css'
import SignUp from './pages/signUp'
import Login from './pages/login'
import {NavWithRouter} from './components/NavBar'
import MUIThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CreateTheme from '@material-ui/core/styles/createMuiTheme'
import {Provider} from 'react-redux';
import store from './redux/store';
import jwtDecode from 'jwt-decode'
import {SET_AUTHENTICATED}   from './redux/types'
import {getUserData}   from './redux/actions/userActions'
import axios from 'axios';
// import axios from 'axios';


// axios.defaults.baseURL = 'https://us-central1-social-backend-452e5.cloudfunctions.net/api';
const theme = CreateTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    });


    const token = localStorage.FBIDToken;
    if (token){
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp * 1000 <  Date.now()){
            // store.dispatch(logoutUser())
            window.location.href = "/login"
        } else {
            store.dispatch({type: SET_AUTHENTICATED});
            axios.defaults.headers.common['Authorization'] = token
            store.dispatch(getUserData());
        }
    }

export const Root = () => {
    return(
        <MUIThemeProvider theme={theme}>
            <Provider store={store}>
    <Router>
            <NavWithRouter/>
        <div className="container">
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/signup'} component={SignUp}/>
        </Switch>
        </div>
    </Router>
            </Provider>
        </MUIThemeProvider>
    )
};