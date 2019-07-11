import React from 'react';

const SignUp = (props) => (
            <div>
                <button onClick={() => props.history.goBack()}>goBack</button>
                Sign Up
            </div>
        );



export default SignUp;
