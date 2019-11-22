import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAmiWIlknJsCkSpQVV-Slz-952v4i_sqaY',
  authDomain: 'react-native-petshop.firebaseapp.com',
  databaseURL: 'https://react-native-petshop.firebaseio.com',
  projectId: 'react-native-petshop',
  storageBucket: 'react-native-petshop.appspot.com',
  messagingSenderId: '354808018058',
  appId: '1:354808018058:web:2e311d9879a1bc82906973',
  measurementId: 'G-KHDV065P45',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
