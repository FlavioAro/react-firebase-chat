import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase';
import { Input, Button } from '@material-ui/core';

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input className="inputSendMsg" placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button className="buttonSendMsg" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;