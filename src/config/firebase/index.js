import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCt9nY41AYFpIfQt2ZIEQg9tpVWuFa8acg",
    authDomain: "my-doctor-01-35c88.firebaseapp.com",
    projectId: "my-doctor-01-35c88",
    storageBucket: "my-doctor-01-35c88.appspot.com",
    messagingSenderId: "46073853714",
    appId: "1:46073853714:web:ce70001b9cd93101dae5cb"
}

const Fire = firebase.initializeApp(firebaseConfig);
 export default Fire;