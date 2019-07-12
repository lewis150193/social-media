import React from 'react';
import '../App.css'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";

const styles = {
    cards: {
        display: 'flex'
    }
}
const Posts = (props) => {
    return(
        <Card className="card-color">
            <CardMedia
            title={props.post.user}
            image="https://firebasestorage.googleapis.com/v0/b/social-backend-452e5.appspot.com/o/noimage.png?alt=media&token=e2caef99-8c95-46c1-aeb2-e64d31b000bc"
             component={"div"}/>
            <CardContent>
            <Typography variant={"h6"} onClick={() => props.history.push(`/users/${props.post.user}`)}>{props.post.user}</Typography>
            <Typography variant={"body2"} color={"textSecondary"}>{props.post.created}</Typography>
            <Typography variant={"body1"} color={"textPrimary"}>{props.post.body}</Typography>
            </CardContent>
        </Card>
    )};

export default withRouter(withStyles(styles)(Posts));