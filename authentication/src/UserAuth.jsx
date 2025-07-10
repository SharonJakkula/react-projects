import React, {useState}from 'react'
import { authentication } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const UserAuth = () => {
    const [data,setData]=useState({
        email:"",
        password:""

    })
    const {email,password} = data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})

    }
      const signUp = (e) => {
  e.preventDefault();
createUserWithEmailAndPassword(authentication, email, password)   
 .then((userCredential) => {
      console.log('User created:', userCredential.user);
    })
    .catch((error) => {
      console.error('Error signing up:', error.message);
    });
};
    const signIn = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      console.log('User signed in:', userCredential.user);
    })
    .catch((error) => {
      console.error('Sign in error:', error.message);
    });
};
 
  return (
    <div>
        <center>
            <form autoComplete="off">
                <input type="email" name="email" value={email} placeholder='Email' onChange={changeHandler}/><br/><br/>
                <input type="password" name="password" value={password} placeholder='Password' onChange={changeHandler}/><br/><br/>
                <button onClick={signIn}>Sign In</button>&nbsp;&nbsp;
                <button onClick={signUp}>Sign Up</button>
            </form>
        </center>

    </div>
  )
}

export default UserAuth