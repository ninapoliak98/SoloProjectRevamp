import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp( {
    apiKey: "AIzaSyACIR8JQk7zDxPvV7qZPKyEhpoIZX6PK_A",
    authDomain: "authentication-e1f56.firebaseapp.com",
    projectId: "authentication-e1f56",
    storageBucket: "authentication-e1f56.appspot.com",
    messagingSenderId: "863878638673",
    appId: "1:863878638673:web:680c1c017a96bc59c01c70"
});

export const auth = app.auth();
export default app;