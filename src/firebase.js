import * as firebase from 'firebase'

const config = {
  apiKey:,
  authDomain:,
  databaseURL:,
  projectId:,
  storageBucket: ,
  messagingSenderId: 
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth()
export const firebaseDatabase = firebase.database()

export default firebase