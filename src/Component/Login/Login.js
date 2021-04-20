import React, {   useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './Firebase.config';


if (firebase.app.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


const Login = () => {


    
  

    const provider = new firebase.auth.GoogleAuthProvider();
   
    const handleGoogleSingIn = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;  
           
            const {displayName, email, photoURL} = result.user;
            const users = {name: displayName, email, photo: photoURL}
            console.log(users)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
     
    const handleGoogleSingOut = () =>{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return (
        <div>
        <button onClick={handleGoogleSingIn}>Google Login</button> 
        

        </div>
    );
};

export default Login;