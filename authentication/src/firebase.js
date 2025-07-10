// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUOmF6b9AM7smBxmbMdzP3jhJNSMyBMMc",
  authDomain: "authentication-78664.firebaseapp.com",
  projectId: "authentication-78664",
  storageBucket: "authentication-78664.appspot.com",  // 🔧 fixed the domain
  messagingSenderId: "111094990058",
  appId: "1:111094990058:web:00b2dc72a991211c6d8393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const authentication = getAuth(app);

export { authentication };
export default db;
