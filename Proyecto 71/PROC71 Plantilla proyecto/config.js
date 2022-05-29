import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBi86CPFpW-0cvV-mHQqw2E0GHK_T_S48Q",
    authDomain: "proyecto-71-2b403.firebaseapp.com",
    projectId: "proyecto-71-2b403",
    storageBucket: "proyecto-71-2b403.appspot.com",
    messagingSenderId: "163310488072",
    appId: "1:163310488072:web:a43de7681f7f05e5865fbd"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
