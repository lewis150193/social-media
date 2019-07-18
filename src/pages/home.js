import React, {Component} from 'react';
import axios from 'axios';
// import { getPosts } from "../data/postData";
import {Grid} from "@material-ui/core";
import Posts from "../components/Posts";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
 componentDidMount() {
     axios.get('/posts')
         .then(data =>  data)
         .then( posts => {
             this.setState({posts: posts.data})
         })
         .catch(err => console.log(err));
 }

    render() {
     console.log(this.state.posts);
        const showPosts = this.state.posts ?
            this.state.posts.map( post => {
            return(
                <>
                    <Posts key={post.screamId}post={post}
                    />
                </>
            )
        }) : <p>Loading...</p>

        return (
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    <p>{showPosts}</p>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>...Profile</p>
                </Grid>
            </Grid>
        );
    }
}

export default Home;