import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHkKiNnNutO",
    authDomain: "196f1",
    projectId: "196f1",
    storageBucket: "appspot.com",
    messagingSenderId: "8931",
    appId: "eafb1c876eb4c9d6",
    measurementId: "3568"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
