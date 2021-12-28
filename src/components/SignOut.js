import React from 'react';
import { auth } from '../firebase.js';
import { Button } from '@material-ui/core';

function SignOut() {
    return (
        <div className="signOut">
            <Button className="buttonSignOut" onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut;