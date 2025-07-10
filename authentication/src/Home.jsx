import React from 'react'
import { authentication } from './firebase'
import { signOut } from 'firebase/auth'; // 


const Home = () => {
  return (
    <div>
        <center>
            <h1>Welcome to home page </h1>
            <br/><button onClick={()=>authentication.signOut()}>Sign Out</button>
            </center>
            </div>
  )
}

export default Home