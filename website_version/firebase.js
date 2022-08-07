// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOtasvkLeg3ScfVuZ2ar_dSUYVPWgJZpM",
  authDomain: "football-app-48146.firebaseapp.com",
  projectId: "football-app-48146",
  storageBucket: "football-app-48146.appspot.com",
  messagingSenderId: "1042966321155",
  appId: "1:1042966321155:web:99e8672570afcf9f14d636"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};