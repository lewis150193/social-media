import React, {Fragment} from "react";
import { withRouter } from "react-router";
import {connect} from 'react-redux';

//MUI
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'
import Notifications from '@material-ui/icons/Notifications'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import CustomButton from '../components/MyButton';

const NavBar = props => {
  const {auth, history} = props;
  return (
    <AppBar position="fixed">
      <ToolBar secondary={true} className="nav-container">
      {auth ? (
        <Fragment>
        <AddPost/>
        <CustomButton TipTitle={'Home'} onClick={
          () => {
            console.log('I clicked to g home');
            history.push('/')

          }
        }>
        <HomeIcon color="primary"/>
        </CustomButton>
        <CustomButton TipTitle={'Notifications'}>
        <Notifications color="primary"/>
        </CustomButton>
        </Fragment>
        ) :  (
           <Fragment>
           <Button color="inherit" onClick={() => history.push("/login")}>
             Login
           </Button>
           <Button color="inherit" onClick={() => history.push("/signup")}>
             SignUp
           </Button>
           <Button color="inherit" onClick={() => history.push("/")}>
             Home
           </Button>
           </Fragment>
         )}
      </ToolBar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  auth: state.user.authenticated
})

export default connect(mapStateToProps)(withRouter(NavBar));


const AddPost = () => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

return (
  <>
  <CustomButton TipTitle={'Create a post'} onClick={handleClickOpen}>
  <AddIcon color="primary"/>
  </CustomButton>
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a post</DialogTitle>
        <DialogContent>
          <DialogContentText>
           What you saying?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="post"
            label="Post"
            type="input"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
      </>
)
}