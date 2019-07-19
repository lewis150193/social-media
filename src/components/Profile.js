import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    minHeight: 150
  },
});

const Profile = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.user.userImg}
          title="User"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.handler}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.website}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Profile;