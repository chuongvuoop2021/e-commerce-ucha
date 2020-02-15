import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC-tlPo8FMkgq6A2VQj80JKfZGWOiyc0Ww",
  authDomain: "ucha-db.firebaseapp.com",
  databaseURL: "https://ucha-db.firebaseio.com",
  projectId: "ucha-db",
  storageBucket: "ucha-db.appspot.com",
  messagingSenderId: "775337562156",
  appId: "1:775337562156:web:acc3df15031e46f2b08189",
  measurementId: "G-PRH96J4FRV"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase