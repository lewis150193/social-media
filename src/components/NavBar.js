import React from 'react';
import { withRouter } from "react-router";

//MUI
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
 const NavBar = (props) => {
     console.log(props);
     return(
     <AppBar position="fixed">
         <ToolBar>
         <Button color="inherit" onClick={() => props.history.push('/login')}>Login</Button>
         <Button color="inherit" onClick={() => props.history.push('/signup')}>SignUp</Button>
         <Button color="inherit" onClick={() => props.history.push('/home')}>Home</Button>
             </ToolBar>
     </AppBar>
     )};


export const NavWithRouter = withRouter(NavBar);