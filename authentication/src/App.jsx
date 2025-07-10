import React,{ useEffect,useState } from 'react'
import './App.css'
import UserAuth from './UserAuth'
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './firebase';
import Home from './Home'
const App=()=> {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(authentication, (user) => {
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <>
      <div>
        <center>
          {presentUser ? <Home/> : <UserAuth/>}
        </center>
      </div>
      
    </>
  )
}

export default App
