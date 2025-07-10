import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';

const Home=()=> {
  let navigate  = useNavigate();
  const [imgname,setImgname]=useState('');
  return (
    <div className='bgimage'>
        <div className='navbar'>
            <h3 className='brandname'>Pixabay</h3>
            <div className="authentication">
                 <button>Login</button> &nbsp;
                 <button>SignUp</button> &nbsp;
            </div>
        </div>
        <div id="hero">
            <h1>Stunning royalty-free images & royalty-free stock</h1>
            <h2>Over 2.3 million+ high quality stock images, videos and music shared by our talented community.</h2>
 
            <input type="text" onChange={(e)=>setImgname(e.target.value)}
            size="80"/> <br />

            <button onClick={()=>imgname && navigate(`/search/${imgname}`)} >Search</button>
        </div>
    </div> 
  )
}

export default Home