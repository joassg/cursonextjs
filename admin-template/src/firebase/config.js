import firebase from "firebase/app"
import 'firebase/auth'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCPQ-QefXIQ01gx9L2wfkOpK4Kcv1kLf48",
        authDomain: "admin-template-cod3r-85541.firebaseapp.com",
        projectId: "admin-template-cod3r-85541",
        storageBucket: "admin-template-cod3r-85541.appspot.com",
        messagingSenderId: "885274464640",
        appId: "1:885274464640:web:5c95babeb4a975d27e7165"
    })
}

// apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
// authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
// projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,

export default firebase