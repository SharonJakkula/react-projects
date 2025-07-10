import React,{ useState,useEffect } from 'react'
import './App.css'

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB2sxezkvZxBLYZxOJ1zgLLvviQbSz6yJU",
  authDomain: "signin-354ad.firebaseapp.com",
  projectId: "signin-354ad",
  storageBucket: "signin-354ad.appspot.com",
  messagingSenderId: "1073144150830",
  appId: "1:1073144150830:web:9222f0a1d7fba896ec98bf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const App=()=> {
  const [user,setUser] = useState(null);

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((person) => {
      setUser(person);
    });
    return () => unsubscribe();
  },[])

  const signInWithGoogle = async() => {
    try{
      await signInWithPopup(auth,provider);
    }
    catch(err){
      console.error("Sign in error",err)
    }
  }
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      console.error("Sign out error", err);
    }
  };
  return (
    <>
      <div>
        <center>
          {user ? (
            <div>
            <h1>Welcome</h1>
            <button onClick={signOut}>Sign Out</button>
          </div> ):(
          <button onClick={signInWithGoogle}>Sign In with Google</button>
          )}
        </center>
      </div>
      
    </>
  )
}

export default App
