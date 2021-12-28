import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHkKiNnNutONg_fKYF8eYruMUbrCqlpHg",
    authDomain: "curso-196f1.firebaseapp.com",
    projectId: "curso-196f1",
    storageBucket: "curso-196f1.appspot.com",
    messagingSenderId: "103364168931",
    appId: "1:103364168931:web:18bd71eafb1c876eb4c9d6",
    measurementId: "G-8T3F6Y3568"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }