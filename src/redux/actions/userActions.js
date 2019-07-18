import { SIGNUP, LOADING_UI, SET_USER, CLEAR_ERRORS, SET_ERRORS} from "../types";
import axios from 'axios'

export const LoginUser =  (userData, history) => dispatch => {
    dispatch({type: LOADING_UI})
    axios.post('/login', userData)
        .then(success => {
            console.log(success.data);
            if (success.statusCode === 200) {
                const FBIDToken = `Bearer ${success.data.token}`;
                console.log('You have logged in!!!');
                localStorage.setItem('FBIToken', FBIDToken);
                axios.defaults.headers.common['Authorization'] = FBIDToken;
                dispatch(getUserData());
                dispatch({type: CLEAR_ERRORS});
                history.push('/')
            }
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: SET_ERRORS,
                payload: error.response.data
            })
        });
};


export const getUserData = () => dispatch => {
        axios.get('/user')
            .then(res => {
                dispatch({
                    type: SET_USER,
                    payload: res.data
                })
            }).
            catch( err => console.log(err))
};
