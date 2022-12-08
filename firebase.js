// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeQ9CD5pBL8w2iY98aYhmPsadOjwWod3A",
  authDomain: "socialapp-7c184.firebaseapp.com",
  projectId: "socialapp-7c184",
  storageBucket: "socialapp-7c184.appspot.com",
  messagingSenderId: "932582534421",
  appId: "1:932582534421:web:e19af4778e0e28485ccd1c"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };

