import {SIGNUP, LOADING_UI, SET_USER, CLEAR_ERRORS, SET_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED} from "../types";

const initaleState = {
        authenticated: false,
        credentials: {},
        likes: [],
        notifications: []
};

export default function (state = initaleState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return{
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initaleState;

        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            };

        default:
            return state;
        
    }
    
}