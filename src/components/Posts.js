import React from "react";
import "../App.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { withRouter } from "react-router";

const styles = {
  cards: {
    display: "flex",
    marginBottom: 20,
    paddingRight: 50
  },
  image: {
    minWidth: 150
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

const Posts = props => {
  const { classes } = props;
  dayjs.extend(relativeTime);
  return (
    <Card className={classes.cards}>
      <CardMedia
        className={classes.image}
        title={props.post.user}
        image={props.post.userImg}
      />
      <CardContent className={classes.details}>
        <Typography
          variant={"h6"}
          onClick={() => props.history.push(`/users/${props.post.user}`)}
        >
          {props.post.user}
        </Typography>
        <Typography variant={"body2"} color={"textSecondary"}>
          {dayjs(props.post.created).fromNow()}
        </Typography>
        <Typography variant={"body1"} color={"textPrimary"}>
          {props.post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withRouter(withStyles(styles)(Posts));
