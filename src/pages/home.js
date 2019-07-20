import React, {Component} from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import Posts from "../components/Posts";
import { connect } from 'react-redux'
import {getUserData} from '../redux/actions/userActions'
import Profile from '../components/Profile';
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
         this.props.getUserData();
 }

    render() {
     console.log(this.state.posts);
     console.log(this.props);
        const showPosts = this.state.posts ?
            this.state.posts.map( post => {
            return(
                <>
                    <Posts key={post.screamId} post={post}
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
                    <Profile user={this.props.user.credentials}/>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = {
   getUserData: getUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);