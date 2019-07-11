import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home'
import './App.css'
import SignUp from './pages/signUp'
import Login from './pages/login'
import {NavWithRouter} from './components/NavBar'

export const Root = () => {

    return(
    <Router>
        <div className="container">
            <NavWithRouter/>
        <Switch>
            <Route  exact path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/signup'} component={SignUp}/>
        </Switch>
        </div>
    </Router>
    )
};