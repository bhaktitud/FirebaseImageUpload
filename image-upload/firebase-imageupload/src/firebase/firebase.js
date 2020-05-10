import firebase from 'firebase/app'
import 'firebase/storage'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "<your api key>",
    authDomain: "<your auth domain>",
    databaseURL: "<your db url>",
    projectId: "<your project id>",
    storageBucket: "<your storage bucket>",
    messagingSenderId: "<your messaging sender id>",
    appId: "your app id"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
    storage, firebase as default
}
