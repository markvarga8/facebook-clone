import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyByKU1ZQh1V5_LHUXn419I6bJaDoj3Gkuo",
  authDomain: "facebook-clone-bef90.firebaseapp.com",
  databaseURL: "https://facebook-clone-bef90.firebaseio.com",
  projectId: "facebook-clone-bef90",
  storageBucket: "facebook-clone-bef90.appspot.com",
  messagingSenderId: "863447296149",
  appId: "1:863447296149:web:e1e7bc351e17d14954d39c",
  measurementId: "G-187L3278X2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db