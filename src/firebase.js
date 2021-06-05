import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyDxfZj9KH1YNz-zNCEbr3Tn1802MrtHI7Q",
        authDomain: "covid-care-b85b8.firebaseapp.com",
        projectId: "covid-care-b85b8",
        storageBucket: "covid-care-b85b8.appspot.com",
        messagingSenderId: "789971171174",
        appId: "1:789971171174:web:35b4d0edc8239c515c7aa7"
      }).auth();