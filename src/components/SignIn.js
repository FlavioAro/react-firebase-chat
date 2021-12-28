import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase.js';
import { Button } from '@material-ui/core';

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="signIn">
            <Button className="buttonSignIn" onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn;