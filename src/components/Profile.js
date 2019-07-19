import React from 'react';
import  withStyles  from '@material-ui/core/styles/withStyles';
import { withRouter } from "react-router";
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import Link from '@material-ui/core/Link'
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import Calendar from '@material-ui/icons/CalendarToday'

import Button from '@material-ui/core/Button'
import Paper  from '@material-ui/core/Paper';

const styles = { paper: {
    padding: 20
  },
  profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%'
      }
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      textAlign: 'center',
      '& span, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: '#00bcd4'
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 10px'
    }
  }
    }; 
const Profile = props => {
    const {
        classes,
        user: {
            credentials: {handler, created, userImg, bio, website, location},
            loading,
            authenticated
        }
    } = props;

    let profileMarkUp = !loading ? (authenticated ? 
        (
            <Paper className={classes.paper}>
               <div className={classes.profile}>
                   <div className="profile-image">
                        <img   src={userImg} alt="user" className="profile-image"/>
                    </div> 
                    <hr/>
                    <div className="profile-details">
                <Link color="primary" onClick={(() => props.history.push(`/user/${handler}`))}>
                    @{handler}
                    </Link>
                    <hr/>
                    {bio && 
                    <Typography variant="body2">{bio}</Typography>
                    }
                    <hr/>
                    {location && (
                        <LocationOn color="primary" />

                    )}
                    {website &&  <Typography variant="body2">{website}</Typography>}
               </div>
               </div>
            </Paper>
        ) : (<p>Run that my guy</p>)) : (<p>Loading...</p>)

  return profileMarkUp;
}


 const mapStateToProps = state => ({
     user: state.user
 })
export default connect(mapStateToProps)(withRouter(withStyles(styles)(Profile)));