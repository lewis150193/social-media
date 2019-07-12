import axios from 'axios';

export const getPosts = () => {
    axios.get("/posts")
        .then(data =>  {
            return data
        })
};