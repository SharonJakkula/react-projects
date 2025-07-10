import firebase from 'firebase';
import storage from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBG96tC1azHnxgap_H-uQiiiuPAgEynQqU",
  authDomain: "upload-image-347a7.firebaseapp.com",
  projectId: "upload-image-347a7",
  storageBucket: "upload-image-347a7.firebasestorage.app",
  messagingSenderId: "392294765904",
  appId: "1:392294765904:web:2182190d87c33d86b9c855"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;